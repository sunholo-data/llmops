from setuptools import setup, find_packages

# Define your base version
version = '0.61.7'

setup(
    name='sunholo',
    version=version,
    packages=find_packages(),
    license='Apache License, Version 2.0',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    description='Large Language Model DevOps - a package to help deploy LLMs to the Cloud.',
    author = 'Holosun ApS',
    author_email = 'multivac@sunholo.com',
    url = 'https://github.com/sunholo-data/sunholo-py',
    download_url=f'https://github.com/sunholo-data/sunholo-py/archive/refs/tags/v{version}.tar.gz',
    keywords=['llms', 'devops','google_cloud_platform'],
    entry_points={
        'console_scripts': [
            'sunholo=sunholo.cli.cli:main', 
        ],
    },
    package_data={
        'sunholo.database': ['sql/sb/*.sql'],
        'sunholo.lookup': ['*.yaml'],
        'sunholo.templates' : ['*.*']
    },
    install_requires=[
        # Base dependencies
        "google-auth", # to check if on gcp
        "langchain",
        "langchain_experimental",
        "langchain-community",
        # Add the minimal dependencies that your package requires here
    ],
    extras_require={
        # Define optional dependencies with feature names
        'all': [
            "asyncpg",
            "fastapi",
            "flask",
            "google-auth",
            "google-auth-httplib2",
            "google-auth-oauthlib",
            "google-cloud-aiplatform",
            "google-api-python-client",
            "google-cloud-alloydb-connector[pg8000]",
            "google-cloud-bigquery",
            "google-cloud-build",
            "google-cloud-logging",
            "google-cloud-storage",
            "google-cloud-pubsub",
            "google-cloud-discoveryengine",
            "google-generativeai",
            "gunicorn",
            "httpcore",
            "httpx",
            "jsonschema",
            "lancedb",
            "langchain",
            "langchain_experimental",
            "langchain-community",
            "langchain-openai",
            "langchain-google-genai",
            "langchain_google_alloydb_pg",
            "langchain-anthropic",
            "langfuse",
            "pg8000",
            "pgvector",
            "psycopg2-binary",
            "pypdf",
            "python-socketio",
            "rich",
            "supabase",
            "tiktoken",

        ],
        'cli': [
            "jsonschema",
            "rich"
        ],
        'database': [
            "asyncpg",
            "supabase",
            "sqlalchemy",
            "pg8000",
            "pgvector",
            "psycopg2-binary",
            "lancedb",
        ],
        'pipeline': [
            "GitPython",
            "lark",
            "pypdf",
            "tabulate",
        ],
        'gcp': [
            "google-auth-httplib2",
            "google-auth-oauthlib",
            "google-cloud-aiplatform",
            "google-cloud-bigquery",
            "google-cloud-build",
            "google-cloud-storage",
            "google-cloud-logging",
            "google-cloud-pubsub",
            "google-cloud-discoveryengine",
            "google-generativeai",
            "langchain-google-genai",
            "langchain_google_alloydb_pg",
            "google-api-python-client",
            "google-cloud-alloydb-connector[pg8000]",
        ],
        'openai': [
            "langchain-openai",
            "tiktoken"
        ],
        'anthropic': [
            "langchain-anthropic",        
        ],
        'http': [
            "fastapi",
            "flask",
            "gunicorn",
            "httpcore",
            "httpx",
            "langfuse",
            "python-socketio",
            "requests"
        ]
    },
    classifiers=[
        'Development Status :: 3 - Alpha',      # Chose either "3 - Alpha", "4 - Beta" or "5 - Production/Stable" as the current state of your package
        'Intended Audience :: Developers',      # Define that your audience are developers
        'Topic :: Software Development :: Build Tools',
        'License :: OSI Approved :: Apache Software License', 
        'Programming Language :: Python :: 3',      #Specify which pyhton versions that you want to support
        'Programming Language :: Python :: 3.10',
        'Programming Language :: Python :: 3.11',
        'Programming Language :: Python :: 3.12'
    ],
)
