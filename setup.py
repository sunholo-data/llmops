from setuptools import setup, find_packages
import datetime

# Define your base version
base_version = '0.1.0'

timestamp = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
version = f"{base_version}.{timestamp}"


setup(
    name='sunholo',
    version=version,
    packages=find_packages(),
    license='Apache License, Version 2.0',
    description='Large Language Model DevOps - a package to help deploy LLMs to the Cloud.',
    author = 'Sunholo ApS',
    author_email = 'llmops@sunholo.com',
    url = 'https://github.com/sunholo-data/llmops',
    download_url=f'https://github.com/sunholo-data/llmops/archive/refs/tags/v{base_version}.tar.gz',
    keywords=['llms', 'devops','google_cloud_platform'],
    package_data={
        'sunholo.database': ['sql/sb/*.sql']
    },
    install_requires=[
        # List your dependencies here
        "langchain"
        # "supabase",
        # "openai",
        # "tiktoken",
        # "google-cloud-storage",
        # "google-api-python-client",
        # "google-auth-httplib2",
        # "google-auth-oauthlib",
        # "psycopg2-binary"
    ],
    classifiers=[
        'Development Status :: 3 - Alpha',      # Chose either "3 - Alpha", "4 - Beta" or "5 - Production/Stable" as the current state of your package
        'Intended Audience :: Developers',      # Define that your audience are developers
        'Topic :: Software Development :: Build Tools',
        'License :: OSI Approved :: Apache Software License',   # Again, pick a license
        'Programming Language :: Python :: 3',      #Specify which pyhton versions that you want to support
        'Programming Language :: Python :: 3.10',
        'Programming Language :: Python :: 3.11',
        'Programming Language :: Python :: 3.12'
    ],
)
