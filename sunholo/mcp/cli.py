import os
import asyncio
from typing import Any, Sequence
from functools import lru_cache
import subprocess
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import (
    Resource,
    Tool,
    TextContent,
    ImageContent,
    EmbeddedResource,
)
"""
try:
    from mcp.server import Server
    from mcp.server.stdio import stdio_server
    from mcp.types import (
        Resource,
        Tool,
        TextContent,
        ImageContent,
        EmbeddedResource,
    )
except ImportError:
    Server = None
"""

from pydantic import AnyUrl

# Configure logging
from ..custom_logging import setup_logging
logger = setup_logging("sunholo-mcp-server")

class SunholoMCPServer:
    def __init__(self):
        if Server is None:
            raise ImportError("SunholoMCPServer requires `sunholo[anthropic]` to be installed")
        
        self.server = Server("sunholo-mcp-server")
        self.setup_handlers()

    def setup_handlers(self):
        """Set up all the MCP protocol handlers"""
        self.setup_resource_handlers()
        self.setup_tool_handlers()

    def setup_resource_handlers(self):
        """Configure resource-related handlers"""
        
        @self.server.list_resources()
        async def list_resources() -> list[Resource]:
            """List available Sunholo resources"""
            return [
                Resource(
                    uri="sunholo://vacs/list",
                    name="Available Sunholo VACs",
                    mimeType="application/json",
                    description="List of available Virtual Agent Computers"
                )
            ]

        @self.server.read_resource()
        async def read_resource(uri: AnyUrl) -> str:
            """Read Sunholo resources based on URI"""
            if str(uri) == "sunholo://vacs/list":
                try:
                    # Execute sunholo vac list command
                    result = subprocess.run(
                        ["sunholo", "vac", "list", "--debug"],
                        capture_output=True,
                        text=True
                    )
                    return result.stdout
                except subprocess.CalledProcessError as e:
                    raise RuntimeError(f"Failed to list VACs: {str(e)}")
                except Exception as e:
                    raise RuntimeError(f"Error accessing Sunholo: {str(e)}")

            raise ValueError(f"Unknown resource: {uri}")

    def setup_tool_handlers(self):
        """Configure tool-related handlers"""

        @self.server.list_tools()
        async def list_tools() -> list[Tool]:
            """List available Sunholo tools"""
            return [
                Tool(
                    name="chat_with_vac",
                    description="Chat with a specific Sunholo VAC",
                    inputSchema={
                        "type": "object",
                        "properties": {
                            "vac_name": {
                                "type": "string",
                                "description": "Name of the VAC to chat with"
                            },
                            "message": {
                                "type": "string",
                                "description": "Message to send to the VAC"
                            },
                            "headless": {
                                "type": "boolean",
                                "description": "Whether to run in headless mode",
                                "default": True
                            }
                        },
                        "required": ["vac_name", "message"]
                    }
                ),
                Tool(
                    name="embed_content",
                    description="Embed content in a VAC's vector store",
                    inputSchema={
                        "type": "object",
                        "properties": {
                            "vac_name": {
                                "type": "string",
                                "description": "Name of the VAC to embed content for"
                            },
                            "content": {
                                "type": "string",
                                "description": "Content to embed"
                            },
                            "local_chunks": {
                                "type": "boolean",
                                "description": "Whether to process chunks locally",
                                "default": False
                            }
                        },
                        "required": ["vac_name", "content"]
                    }
                )
            ]

        @self.server.call_tool()
        async def call_tool(
            name: str,
            arguments: Any
        ) -> Sequence[TextContent | ImageContent | EmbeddedResource]:
            """Handle tool calls for Sunholo interactions"""
            
            if name == "chat_with_vac":
                if not isinstance(arguments, dict):
                    raise ValueError("Invalid arguments format")

                vac_name = arguments.get("vac_name")
                message = arguments.get("message")
                headless = arguments.get("headless", True)

                if not vac_name or not message:
                    raise ValueError("Missing required arguments")

                try:
                    cmd = ["sunholo", "vac", "chat", vac_name, message]
                    if headless:
                        cmd.append("--headless")

                    result = subprocess.run(
                        cmd,
                        capture_output=True,
                        text=True
                    )

                    return [
                        TextContent(
                            type="text",
                            text=result.stdout
                        )
                    ]
                except subprocess.CalledProcessError as e:
                    return [
                        TextContent(
                            type="text",
                            text=f"Error chatting with VAC: {e.stderr}"
                        )
                    ]

            elif name == "embed_content":
                if not isinstance(arguments, dict):
                    raise ValueError("Invalid arguments format")

                vac_name = arguments.get("vac_name")
                content = arguments.get("content")
                local_chunks = arguments.get("local_chunks", False)

                if not vac_name or not content:
                    raise ValueError("Missing required arguments")

                try:
                    cmd = ["sunholo", "embed", vac_name, content]
                    if local_chunks:
                        cmd.append("--local-chunks")

                    result = subprocess.run(
                        cmd,
                        capture_output=True,
                        text=True
                    )

                    return [
                        TextContent(
                            type="text",
                            text=result.stdout
                        )
                    ]
                except subprocess.CalledProcessError as e:
                    return [
                        TextContent(
                            type="text",
                            text=f"Error embedding content: {e.stderr}"
                        )
                    ]

            raise ValueError(f"Unknown tool: {name}")

    async def run(self):
        """Run the MCP server"""
        async with stdio_server() as (read_stream, write_stream):
            await self.server.run(
                read_stream,
                write_stream,
                self.server.create_initialization_options()
            )

def cli_mcp(args):
    """CLI handler for the MCP server command"""
    try:

        # Create and run the MCP server
        server = SunholoMCPServer()
            
        logger.info("Starting Sunholo MCP server...")
        asyncio.run(server.run())

    except Exception as e:
        logger.error(f"Error running MCP server: {str(e)}")
        raise

def setup_mcp_subparser(subparsers):
    """
    Sets up an argparse subparser for the 'mcp' command.

    By default will use configurations within the folder specified by '_CONFIG_FOLDER'

    Example command:
    ```bash
    sunholo mcp
    ```
    """
    mcp_parser = subparsers.add_parser('mcp', 
                                      help='Start an Anthropic MCP server that wraps `sunholo` functionality')
    
    mcp_parser.set_defaults(func=cli_mcp)
