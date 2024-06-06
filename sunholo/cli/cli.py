import argparse
import logging

from .configs import setup_list_configs_subparser
from .deploy import setup_deploy_subparser
from .cli_init import setup_init_subparser
from .merge_texts import setup_merge_text_subparser
from .run_proxy import setup_proxy_subparser
from .chat_vac import setup_vac_subparser
from .embedder import setup_embedder_subparser

from ..utils.config import load_config_key

from ..logging import log

from .sun_rich import console
import sys
from rich.panel import Panel


def load_default_gcp_config():
    try:
        gcp_config = load_config_key('gcp_config', 'global', kind="vacConfig")
    except FileNotFoundError as e:
        console.print(f"{e} - move config/ folder to working directory or set the _CONFIG_FOLDER environment variable to its location")
        sys.exit(1)

    if gcp_config:
        return gcp_config.get('project_id', ''), gcp_config.get('location', 'europe-west1')
    else:
        return '', 'europe-west1'

def main(args=None):

    console.print(
        Panel("Welcome to Sunholo Command Line Interface, your assistant to deploy GenAI Virtual Agent Computers (VACs) to Multivac or your own Cloud.", 
            title="Sunholo GenAIOps Assistant CLI",
            subtitle="Documentation at https://dev.sunholo.com/")
            )
    console.rule()

    """
    Entry point for the sunholo console script. This function parses command line arguments
    and invokes the appropriate functionality based on the user input.

    Get started:
    ```bash
    sunholo --help
    ```
    """
    default_project, default_region = load_default_gcp_config()

    parser = argparse.ArgumentParser(description="sunholo CLI tool for deploying GenAI VACs")
    parser.add_argument('--debug', action='store_true', help='Enable debug output')
    parser.add_argument('--project', default=default_project, help='GCP project to list Cloud Run services from.')
    parser.add_argument('--region', default=default_region, help='Region to list Cloud Run services from.')
    
    subparsers = parser.add_subparsers(title='commands', 
                                       description='Valid commands', 
                                       help='Commands', 
                                       dest='command', 
                                       required=True)

    # deploy command
    setup_deploy_subparser(subparsers)
    # Setup list-configs command
    setup_list_configs_subparser(subparsers)
    # init command
    setup_init_subparser(subparsers)
    # merge-text command
    setup_merge_text_subparser(subparsers)
    # proxy command
    setup_proxy_subparser(subparsers)
    # vac command
    setup_vac_subparser(subparsers)
    # embed command
    setup_embedder_subparser(subparsers)

    args = parser.parse_args(args)

    if args.debug:
        log.setLevel(logging.DEBUG)
        logging.getLogger().setLevel(logging.DEBUG)
    else:
        log.setLevel(logging.WARNING)
        logging.getLogger().setLevel(logging.WARNING)

    if hasattr(args, 'func'):
        args.func(args)
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
