from langfuse.callback import CallbackHandler
from fastapi import Request
from typing import Dict, Any


def create_langfuse_callback(**kwargs):

    langfuse_handler = CallbackHandler(**kwargs)

    # Tests the SDK connection with the server
    langfuse_handler.auth_check()

    return langfuse_handler

def add_langfuse_tracing(
        config: Dict[str, Any],
        request: Request) -> Dict[str, Any]:
    """
    Config modifier function to add a tracing callback

    :param config: config dict
    :param request: HTTP request
    :return: updated config
    """

    if "callbacks" not in config:
        config["callbacks"] = []

    langfuse_handler = create_langfuse_callback(
        user_id = config.get("user_id"),
        session_id = config.get("session_id")
    )
    config["callbacks"].extend([langfuse_handler])

    return config


#add_routes(app, my_chain,
#           path="/my-chain",
#           per_req_config_modifier=_add_tracing,
#           config_keys=["configurable", "session_id", "user_id"])