import os
from ruamel.yaml import YAML
import shutil
from ..utils.config import get_module_filepath
from ..utils.parsers import sanitize_cloudrun_name

yaml = YAML(typ='safe')

def init_project(args):
    """
    Initializes a new sunholo project with a basic configuration file and directory structure.

**Template Files (`templates/project`):**

A `templates/project` directory is within the `sunholo` package with the following template files in it:

* **`config/llm_config.yaml`:** A basic configuration file with placeholders for LLM settings, vector stores, etc.
* **`config/cloud_run_urls.json`:** A template for Cloud Run URLs.
* **`app.py`:** A basic Flask app that can be customized for the project.
* **`.gitignore`:** A gitignore file to exclude unnecessary files from version control.
* **`README.md`:** A README file with instructions for setting up and running the project.

**Usage:**

Users can initialize a new project using the following command:

```bash
sunholo init my_genai_project
```

This will create a new directory named `my_genai_project` with the template files, allowing users to start building their GenAI application.
    """
    from .sun_rich import console

    project_name = sanitize_cloudrun_name(args.project_name)
    current_dir = os.getcwd()  # This captures the current directory where the command is run
    project_dir = os.path.join(current_dir, project_name)

    console.rule(project_name)
    console.print(f"Initializing in directory: {project_dir}")

    # Create project directory
    if os.path.exists(project_dir):
        console.print(f"Directory {project_dir} already exists. Skipping template creation.  If you wish to init a new project, please choose a different project name.")
    else:
        console.print(f"Directory {project_dir} not found.  Copying over template files.")
        os.makedirs(project_dir)

        # Copy template files
        template_dir = get_module_filepath("templates/project")
        for filename in os.listdir(template_dir):
            src_path = os.path.join(template_dir, filename)
            dest_path = os.path.join(project_dir, filename)
            if os.path.isfile(src_path):
                shutil.copy(src_path, dest_path)
            elif os.path.isdir(src_path):
                shutil.copytree(src_path, dest_path)

    # Determine the location of the generated.tfvars file
    terraform_dir = args.terraform_dir or os.getenv('MULTIVAC_TERRAFORM_DIR')
    if terraform_dir is None:
        console.print("[SKIP] To auto-generate terraform code, must specify a --terraform_dir or use the MULTIVAC_TERRAFORM_DIR environment variable")
        return
    
    tfvars_file = os.path.join(terraform_dir, 'generated.tfvars')

    # Get the service account, either from the CLI argument or default
    service_account = args.service_account or "sa-llmops"  # Default service account

    # Paths to be included in the cloud build (based on the current working directory)
    # We want paths to start from 'application/system_services/{project_name}'
    relative_base = os.path.relpath(current_dir, os.path.join(current_dir, "..", ".."))
    included_path = os.path.join(relative_base, project_name, "**")
    cloud_build_path = os.path.join(relative_base, project_name, "cloudbuild.yaml")

    update_cloudbuild_template(project_dir, project_name, os.path.join(relative_base, project_name))
    write_vac_config(project_dir, project_name)

    # Define the cloud_run configuration for 'discord-server' with the correct project_dir path
    cloud_run_config = {
        project_name: {
            "cpu": "1",
            "memory": "2Gi",
            "max_instance_count": 3,
            "timeout_seconds": 1500,
            "port": 8080,
            "service_account": service_account,
            "invokers": ["allUsers"],
            "cloud_build": {
                "included": [included_path],
                "path": cloud_build_path,
                "substitutions": {},
                "repo_name": "",
                "repo_owner": ""
            }
        }
    }


    # Initialize the TerraformVarsEditor and update the .tfvars file
    try:
        from ..terraform import TerraformVarsEditor
        editor = TerraformVarsEditor(tfvars_file, terraform_dir)
        editor.update_from_dict(cloud_run_config, 'cloud_run_autogenerated')
    except ImportError as e:
        console.print(f"Error initializing TerraformVarsEditor: {e}")

    from rich.panel import Panel

    console.print(
        Panel((
            "Next steps: \n"
            f" - Navigate to [orange]{project_dir}/config[/orange] and customize VAC configuration files.\n"
            f" - Add your own GenAI app logic to [orange]{project_dir}/vac_service.py[/orange]\n"
            f" - Check terraform [orange]{terraform_dir}/generated.tfvars[/orange] for Multivac deployment"
            ), 
            title=f"Project [bold orange]{project_name}[/bold orange] initialized successfully.",
            subtitle=project_dir),
            )
    console.rule()

def update_cloudbuild_template(project_dir: str, service_name: str, build_folder: str):
    """
    Updates the cloudbuild.yaml template file by replacing the `CHANGE_ME` placeholders with actual values.

    Args:
    -----
    project_dir : str
        The directory where the project and cloudbuild.yaml are located.
    service_name : str
        The name of the service to be used in Cloud Run.
    build_folder : str
        The build folder where the Docker build will take place.

    Example:
    -------
    update_cloudbuild_template('/path/to/project', 'my_service', 'src')
    """
    cloudbuild_path = os.path.join(project_dir, "cloudbuild.yaml")

    # Define the substitutions to replace CHANGE_ME
    substitutions = {
        "_SERVICE_NAME": service_name,
        "_BUILD_FOLDER": build_folder,
    }

    # Read the cloudbuild.yaml template
    with open(cloudbuild_path, 'r') as file:
        content = file.read()

    # Replace each placeholder with its corresponding value
    for placeholder, value in substitutions.items():
        content = content.replace(f"{placeholder}: CHANGE_ME", f"{placeholder}: {value}")


    # Write the updated content back to cloudbuild.yaml
    with open(cloudbuild_path, 'w') as file:
        file.write(content)

    print(f"cloudbuild.yaml updated successfully with service name '{service_name}' and build folder '{build_folder}'.")

def write_vac_config(project_dir: str, service_name: str):
    """
    Writes the vac_config.yaml file with the provided service name as the key.
    """
    vac_config_content = {
        'kind': 'vacConfig',
        'apiVersion': 'v1',
        'vac': {
            service_name: {  # Use the service name here
                'llm': 'vertex',
                'model': 'gemini-1.5-pro-preview-0514',
                'agent': 'vertex-genai',
                'display_name': 'Template VAC',
                'memory': [
                    {
                        'llamaindex-native': {
                            'vectorstore': 'llamaindex'
                        }
                    }
                ],
                'gcp_config': {
                    'project_id': 'llamaindex_project',
                    'location': 'europe-west1',
                    'rag_id': '1234544343434'  # Replace with actual RAG ID
                },
                'chunker': {
                    'chunk_size': 1000,
                    'overlap': 200
                }
            }
        }
    }

    config_dir = os.path.join(project_dir, 'config')
    if not os.path.exists(config_dir):
        os.makedirs(config_dir)

    vac_config_path = os.path.join(config_dir, 'vac_config.yaml')

    # Write the YAML configuration to the file
    with open(vac_config_path, 'w') as file:
        yaml.dump(vac_config_content, file, default_flow_style=False)

    print(f"{vac_config_path} written successfully with service name '{service_name}'.")


def setup_init_subparser(subparsers):
    """
    Sets up an argparse subparser for the 'init' command.
    """
    init_parser = subparsers.add_parser('init', help='Initializes a new Multivac project.')
    init_parser.add_argument('project_name', help='The name of the new project.')
    init_parser.add_argument('--terraform-dir', help='The directory where Terraform files will be generated.')
    init_parser.add_argument('--service-account', help='The service account to use for Cloud Run. Defaults to "sa-llmops"')
    init_parser.set_defaults(func=init_project)
