from ..agents import send_to_qa
from ..streaming import generate_proxy_stream
from ..utils.user_ids import generate_user_id
from ..utils.config import load_config_key

from .run_proxy import clean_proxy_list, start_proxy

import uuid

from rich import print
from .sun_rich import console

from rich.prompt import Prompt
from rich.panel import Panel
from rich.text import Text


def get_service_url(service_name, project, region):
    proxies = clean_proxy_list()
    if service_name in proxies:
        port = proxies[service_name]['port']
        return f"http://127.0.0.1:{port}"
    else:
        print(f"No proxy found running for service: {service_name} - attempting to connect")
        return start_proxy(service_name, region, project)

def stream_chat_session(service_name, project, region):

    service_url = get_service_url(service_name, project, region)
    user_id = generate_user_id()
    chat_history = []
    while True:
        session_id = str(uuid.uuid4())
        user_input = Prompt.ask("[bold cyan]You[/bold cyan]")
        if user_input.lower() in ["exit", "quit"]:
            console.print("[bold red]Exiting chat session.[/bold red]")
            break

        chat_history.append({"role": "Human", "content": user_input})

        def stream_response():
            generate = generate_proxy_stream(
                send_to_qa,
                user_input,
                vector_name=service_name,
                chat_history=chat_history,
                generate_f_output=lambda x: x,  # Replace with actual processing function
                stream_wait_time=0.5,
                stream_timeout=120,
                message_author=user_id,
                #TODO: populate these
                image_url=None,
                source_filters=None,
                search_kwargs=None,
                private_docs=None,
                whole_document=False,
                source_filters_and_or=False,
                # system kwargs
                configurable={
                    "vector_name": service_name,
                },
                user_id=user_id,
                session_id=session_id, 
                message_source="cli",
                override_endpoint=service_url
            )
            for part in generate():
                yield part

        response_started = False
        vac_response = ""

        # point or star?
        with console.status("[bold orange]Thinking...[/bold orange]", spinner="star") as status:
            for token in stream_response():
                if not response_started:
                    status.stop()
                    console.print(f"[bold yellow]{service_name}:[/bold yellow] ", end='')
                    response_started = True

                if isinstance(token, bytes):
                    token = token.decode('utf-8')
                console.print(token, end='')
                vac_response += token

        chat_history.append({"role": "AI", "content": vac_response})
        response_started = False
        console.print()
        console.rule()

def headless_mode(service_name, user_input, project, region, chat_history=None):
    chat_history = chat_history or []
    chat_history.append({"role": "Human", "content": user_input})
    service_url = get_service_url(project, region)
    user_id = generate_user_id()
    session_id = str(uuid.uuid4())

    def stream_response():
        generate = generate_proxy_stream(
                send_to_qa,
                user_input,
                vector_name=service_name,
                chat_history=chat_history,
                generate_f_output=lambda x: x,  # Replace with actual processing function
                stream_wait_time=0.5,
                stream_timeout=120,
                message_author=user_id,
                #TODO: populate these
                image_url=None,
                source_filters=None,
                search_kwargs=None,
                private_docs=None,
                whole_document=False,
                source_filters_and_or=False,
                # system kwargs
                configurable={
                    "vector_name": service_name,
                },
                user_id=user_id,
                session_id=session_id, 
                message_source="cli",
                override_endpoint=service_url
        )
        for part in generate():
            yield part

    print(f"VAC {service_name}: ", end='', flush=True)
    for token in stream_response():
        if isinstance(token, bytes):
            token = token.decode('utf-8')
        print(token, end='', flush=True)

    chat_history.append({"role": "AI", "content": token})
    print()  # For new line after streaming ends

    return chat_history


def vac_command(args):
    try:
        service_url = get_service_url(args.service_name, args.project, args.region)
    except ValueError as e:
        console.print(f"[bold red]ERROR: Could not start {args.service_name} proxy URL: {str(e)}[/bold red]")
        return
    
    display_name = load_config_key("display_name", vector_name=args.service_name,  kind="vacConfig")
    description = load_config_key("description", vector_name=args.service_name, kind="vacConfig")

    print(
        Panel(description or "Starting VAC chat session", 
              title=display_name or args.service_name,
              subtitle=service_url)
              )
    
    if args.headless:
        headless_mode(args.service_name, args.user_input, args.project, args.region, args.chat_history)
    else:
        stream_chat_session(args.service_name, args.project, args.region)

def setup_vac_subparser(subparsers):
    """
    Sets up an argparse subparser for the 'vac' command.

    Args:
        subparsers: The subparsers object from argparse.ArgumentParser().
    """
    vac_parser = subparsers.add_parser('vac', help='Interact with deployed VAC services.')
    vac_parser.add_argument('service_name', help='Name of the VAC service.')
    vac_parser.add_argument('user_input', help='User input for the VAC service when in headless mode.', nargs='?', default=None)
    vac_parser.add_argument('--headless', action='store_true', help='Run in headless mode.')
    vac_parser.add_argument('--chat_history', help='Chat history for headless mode (as JSON string).', default=None)
    vac_parser.set_defaults(func=vac_command)
