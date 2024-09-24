"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[367],{3135:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=i(4848),a=i(8453);const o={},r="Parallel Execution",s={id:"howto/parallel",title:"Parallel Execution",description:"In many cases in GenAI its useful to call GenAI models or functions in parallel, to speed up user experience of the response.",source:"@site/docs/howto/parallel.md",sourceDirName:"howto",slug:"/howto/parallel",permalink:"/docs/howto/parallel",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/howto/parallel.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating a grounded in Google Search VertexAI app",permalink:"/docs/howto/grounded_vertex"},next:{title:"Streaming",permalink:"/docs/howto/streaming"}},l={},d=[];function c(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"parallel-execution",children:"Parallel Execution"}),"\n",(0,t.jsx)(n.p,{children:"In many cases in GenAI its useful to call GenAI models or functions in parallel, to speed up user experience of the response."}),"\n",(0,t.jsxs)(n.p,{children:["A basic ",(0,t.jsx)(n.code,{children:"asyncio"})," powered class is available via ",(0,t.jsx)(n.code,{children:"AsyncTaskRunner"})," to help facilitate this, primarily intended for API calls to VACs and agents."]}),"\n",(0,t.jsx)(n.p,{children:"It will wait for the first function to return and get the full result, before waiting for the next etc.   This is useful when constructing lots of context from different agents to feed into an orchestrator agent."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import asyncio\nfrom sunholo.invoke import AsyncTaskRunner\nfrom sunholo.vertex import init_vertex, vertex_safety\nfrom vertexai.preview.generative_models import GenerativeModel\n\nasync def do_async(question):\n    # Initialize Vertex AI\n    init_vertex(location="europe-west1")\n    runner = AsyncTaskRunner(retry_enabled=True)\n\n    # Define async functions for runner\n    async def english(question):\n        print(f"This is English: question=\'{question}\'")\n        model = GenerativeModel(\n            model_name="gemini-1.5-flash",\n            safety_settings=vertex_safety(),\n            system_instruction="Answer in English"\n        )\n        result = await model.generate_content_async(question)\n        return result.text  # Assuming result has a \'text\' attribute\n\n    async def danish(question):\n        print(f"This is Danish: question=\'{question}\'")\n        model = GenerativeModel(\n            model_name="gemini-1.5-flash",\n            safety_settings=vertex_safety(),\n            system_instruction="Answer in Danish"\n        )\n        result = await model.generate_content_async(question)\n        return result.text\n\n    async def french(question):\n        print(f"This is French: question=\'{question}\'")\n        model = GenerativeModel(\n            model_name="gemini-1.5-flash",\n            safety_settings=vertex_safety(),\n            system_instruction="Answer in French"\n        )\n        result = await model.generate_content_async(question)\n        return result.text\n\n    async def italian(question):\n        print(f"This is Italian: question=\'{question}\'")\n        model = GenerativeModel(\n            model_name="gemini-1.5-flash",\n            safety_settings=vertex_safety(),\n            system_instruction="Answer in Italian"\n        )\n        result = await model.generate_content_async(question)\n        return result.text\n\n    # Add tasks to the runner\n    runner.add_task(english, question)\n    runner.add_task(french, question)\n    runner.add_task(danish, question)\n    runner.add_task(italian, question)\n\n    # Run tasks and process results as they complete\n    answers = {}\n    print(f"Start async run with {len(runner.tasks)} runners")\n    async for result_dict in runner.run_async_as_completed():\n        for func_name, result in result_dict.items():\n            if isinstance(result, Exception):\n                print(f"ERROR in {func_name}: {str(result)}")\n            else:\n                # Output the result\n                print(f"{func_name.capitalize()} answer:")\n                print(result)\n                answers[func_name] = result\n\n    # Return a dict of the results {"english": ..., "french": ..., "danish": ..., "italian": ...}\n    return answers\n\n# Run the asynchronous function\nif __name__ == "__main__":\n    question = "What is MLOps?"\n\n    # Run the do_async function using asyncio.run\n    answers = asyncio.run(do_async(question))\n\n    print("\\nFinal answers:")\n    for language, answer in answers.items():\n        print(f"{language.capitalize()}:\\n{answer}\\n")\n'})}),"\n",(0,t.jsx)(n.p,{children:"Gives results like this in a couple of seconds:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"2024-09-17 16:59:54,297 - sunholo - INFO - Adding task: english with args: ('What is MLOps?',)\n2024-09-17 16:59:54,297 - sunholo - INFO - Adding task: french with args: ('What is MLOps?',)\n2024-09-17 16:59:54,297 - sunholo - INFO - Adding task: danish with args: ('What is MLOps?',)\n2024-09-17 16:59:54,297 - sunholo - INFO - Adding task: italian with args: ('What is MLOps?',)\nStart async run with 4 runners\n2024-09-17 16:59:54,297 - sunholo - INFO - Running tasks asynchronously and yielding results as they complete\n2024-09-17 16:59:54,297 - sunholo - INFO - Start async run with 4 runners\nThis is English: question='What is MLOps?'\nThis is French: question='What is MLOps?'\nThis is Danish: question='What is MLOps?'\nThis is Italian: question='What is MLOps?'\nItalian answer:\nMLOps \xe8 un insieme di pratiche e tecnologie che consentono di sviluppare, distribuire e gestire i modelli di machine learning (ML) in modo efficiente e affidabile. In pratica, si tratta di applicare i principi DevOps al mondo del machine learning, automatizzando i processi e rendendo pi\xf9 facile la collaborazione tra data scientist, ingegneri e team aziendali.\n\nEcco alcuni aspetti chiave di MLOps:\n\n* **Integrazione continua e consegna continua (CI/CD) per i modelli ML:**  automazione del processo di sviluppo, test e distribuzione dei modelli, rendendolo pi\xf9 veloce e affidabile.\n* **Gestione del ciclo di vita del modello:**  monitoraggio delle prestazioni del modello nel tempo, identificazione delle aree di miglioramento e riaddestramento quando necessario.\n* **Collaborazione:**  facilitazione della collaborazione tra team diversi, garantendo la condivisione di risorse, codice e dati.\n* **Infrastruttura scalabile:**  fornitura di un'infrastruttura che possa gestire facilmente l'aumento del volume di dati e delle richieste di elaborazione.\n* **Sicurezza e privacy:**  applicazione di pratiche di sicurezza e privacy per proteggere i dati e i modelli.\n\nIn sostanza, MLOps aiuta a portare il machine learning dal mondo della ricerca a quello della produzione, rendendolo un processo continuo e iterativo.\n\nFrench answer:\n**MLOps** est un ensemble de pratiques qui visent \xe0 automatiser et \xe0 industrialiser le cycle de vie complet du machine learning (ML), de la conception \xe0 la production. \n\nEn d'autres termes, MLOps permet de mettre en place des processus robustes et efficaces pour d\xe9velopper, d\xe9ployer et g\xe9rer des mod\xe8les ML \xe0 l'\xe9chelle.\n\n**Voici quelques-uns des principaux aspects de MLOps :**\n\n* **Automatisation:** MLOps automatise les t\xe2ches r\xe9p\xe9titives telles que la pr\xe9paration des donn\xe9es, l'entra\xeenement des mod\xe8les, le d\xe9ploiement et la surveillance.\n* **Collaboration:** MLOps facilite la collaboration entre les \xe9quipes de data science, d'ing\xe9nierie et d'op\xe9rations.\n* **Gestion du cycle de vie:** MLOps couvre toutes les \xe9tapes du cycle de vie ML, de la conception \xe0 la production, en passant par le d\xe9veloppement et la maintenance.\n* **Surveillance et it\xe9rations:** MLOps permet de suivre les performances des mod\xe8les et de les mettre \xe0 jour r\xe9guli\xe8rement pour assurer leur exactitude et leur fiabilit\xe9.\n\n**Les avantages de MLOps incluent :**\n\n* Acc\xe9l\xe9ration du d\xe9veloppement et du d\xe9ploiement de mod\xe8les ML.\n* Am\xe9lioration de la fiabilit\xe9 et de la qualit\xe9 des mod\xe8les.\n* R\xe9duction des co\xfbts et des efforts associ\xe9s \xe0 la gestion des mod\xe8les.\n* Facilitation de la collaboration entre les \xe9quipes.\n\n**En r\xe9sum\xe9, MLOps est un ensemble de bonnes pratiques qui permettent de transformer les processus de machine learning en op\xe9rations efficaces et fiables.**\n\nEnglish answer:\nMLOps, short for Machine Learning Operations, is a set of practices and tools that aim to streamline and automate the entire machine learning lifecycle. It encompasses all aspects of building, deploying, and maintaining machine learning models, from data collection and preparation to model training, deployment, monitoring, and retraining.\n\n**Key Components of MLOps:**\n\n* **Data Management:**  Managing data pipelines, ensuring data quality and consistency, and handling data versioning.\n* **Model Development:** Building and training machine learning models using various algorithms and techniques.\n* **Model Deployment:** Deploying models into production environments, ensuring scalability and performance.\n* **Monitoring and Evaluation:** Tracking model performance, identifying issues, and triggering retraining as needed.\n* **Version Control:** Maintaining versions of code, data, and models for reproducibility and tracking.\n* **Infrastructure Automation:** Automating the deployment and management of ML infrastructure.\n* **Collaboration and Communication:** Facilitating collaboration among data scientists, engineers, and other stakeholders.\n\n**Benefits of MLOps:**\n\n* **Faster Time to Market:** Streamlined workflows enable quicker deployment of ML models.\n* **Improved Model Accuracy:**  Automated processes and consistent data ensure higher-quality models.\n* **Enhanced Scalability and Reliability:**  Robust infrastructure and automation handle increasing workloads.\n* **Increased Efficiency:**  Reduced manual effort and improved productivity.\n* **Better Collaboration:**  Clear processes and communication facilitate teamwork.\n* **Reduced Risk:**  Monitoring and automated retraining mitigate potential model drift.\n\n**Tools and Technologies:**\n\n* **Cloud Platforms:**  AWS, Azure, Google Cloud\n* **Containerization:**  Docker, Kubernetes\n* **Machine Learning Libraries:**  Scikit-learn, TensorFlow, PyTorch\n* **Model Deployment Tools:**  Kubeflow, MLflow\n* **Monitoring and Observability Tools:**  Prometheus, Grafana\n\n**In essence, MLOps bridges the gap between data science and software engineering, enabling organizations to leverage the power of machine learning effectively and sustainably.**\n\nDanish answer:\nMLOps er en samling af praksisser og v\xe6rkt\xf8jer, der hj\xe6lper med at automatisere og optimere maskinl\xe6ringslivscyklussen. Det handler om at bringe de bedste praksisser fra DevOps til maskinl\xe6ringsverdenen for at sikre, at maskinl\xe6ringsmodeller kan udvikles, implementeres og overv\xe5ges effektivt og p\xe5lideligt.\n\nHer er nogle af de vigtigste elementer i MLOps:\n\n* **Dataforberedelse og -kvalitet:** At sikre, at dataene bruges til at tr\xe6ne modeller er rene, konsistente og repr\xe6sentative for den virkelige verden.\n* **Modeltr\xe6ning og -evaluering:** Automatisering af processen med at tr\xe6ne og evaluere modeller for at finde den bedste pr\xe6station.\n* **Modeludrulning og -overv\xe5gning:** Automatiseret udrulning af modeller til produktionsmilj\xf8er og kontinuerlig overv\xe5gning for at sikre, at modellerne udf\xf8rer som forventet.\n* **Versionering og sporbarhed:** At holde styr p\xe5 alle \xe6ndringer til modeller, data og kode for at kunne spore problemer og forbedringer.\n* **Samarbejde og kommunikation:** At skabe en klar kommunikationslinje mellem datavidenskabsm\xe6nd, ingeni\xf8rer og forretningsfolk for at sikre, at alle er p\xe5 samme side.\n\nMLOps er en vigtig del af at skabe succesfulde maskinl\xe6ringsapplikationer, da det hj\xe6lper med at sikre, at modellerne er robuste, p\xe5lidelige og kan h\xe5ndtere \xe6ndringer i data og krav over tid.\n\n\nFinal answers:\nItalian:\nMLOps \xe8 un insieme di pratiche e tecnologie che consentono di sviluppare, distribuire e gestire i modelli di machine learning (ML) in modo efficiente e affidabile. In pratica, si tratta di applicare i principi DevOps al mondo del machine learning, automatizzando i processi e rendendo pi\xf9 facile la collaborazione tra data scientist, ingegneri e team aziendali.\n\nEcco alcuni aspetti chiave di MLOps:\n\n* **Integrazione continua e consegna continua (CI/CD) per i modelli ML:**  automazione del processo di sviluppo, test e distribuzione dei modelli, rendendolo pi\xf9 veloce e affidabile.\n* **Gestione del ciclo di vita del modello:**  monitoraggio delle prestazioni del modello nel tempo, identificazione delle aree di miglioramento e riaddestramento quando necessario.\n* **Collaborazione:**  facilitazione della collaborazione tra team diversi, garantendo la condivisione di risorse, codice e dati.\n* **Infrastruttura scalabile:**  fornitura di un'infrastruttura che possa gestire facilmente l'aumento del volume di dati e delle richieste di elaborazione.\n* **Sicurezza e privacy:**  applicazione di pratiche di sicurezza e privacy per proteggere i dati e i modelli.\n\nIn sostanza, MLOps aiuta a portare il machine learning dal mondo della ricerca a quello della produzione, rendendolo un processo continuo e iterativo.\n\n\nFrench:\n**MLOps** est un ensemble de pratiques qui visent \xe0 automatiser et \xe0 industrialiser le cycle de vie complet du machine learning (ML), de la conception \xe0 la production. \n\nEn d'autres termes, MLOps permet de mettre en place des processus robustes et efficaces pour d\xe9velopper, d\xe9ployer et g\xe9rer des mod\xe8les ML \xe0 l'\xe9chelle.\n\n**Voici quelques-uns des principaux aspects de MLOps :**\n\n* **Automatisation:** MLOps automatise les t\xe2ches r\xe9p\xe9titives telles que la pr\xe9paration des donn\xe9es, l'entra\xeenement des mod\xe8les, le d\xe9ploiement et la surveillance.\n* **Collaboration:** MLOps facilite la collaboration entre les \xe9quipes de data science, d'ing\xe9nierie et d'op\xe9rations.\n* **Gestion du cycle de vie:** MLOps couvre toutes les \xe9tapes du cycle de vie ML, de la conception \xe0 la production, en passant par le d\xe9veloppement et la maintenance.\n* **Surveillance et it\xe9rations:** MLOps permet de suivre les performances des mod\xe8les et de les mettre \xe0 jour r\xe9guli\xe8rement pour assurer leur exactitude et leur fiabilit\xe9.\n\n**Les avantages de MLOps incluent :**\n\n* Acc\xe9l\xe9ration du d\xe9veloppement et du d\xe9ploiement de mod\xe8les ML.\n* Am\xe9lioration de la fiabilit\xe9 et de la qualit\xe9 des mod\xe8les.\n* R\xe9duction des co\xfbts et des efforts associ\xe9s \xe0 la gestion des mod\xe8les.\n* Facilitation de la collaboration entre les \xe9quipes.\n\n**En r\xe9sum\xe9, MLOps est un ensemble de bonnes pratiques qui permettent de transformer les processus de machine learning en op\xe9rations efficaces et fiables.**\n\n\nEnglish:\nMLOps, short for Machine Learning Operations, is a set of practices and tools that aim to streamline and automate the entire machine learning lifecycle. It encompasses all aspects of building, deploying, and maintaining machine learning models, from data collection and preparation to model training, deployment, monitoring, and retraining.\n\n**Key Components of MLOps:**\n\n* **Data Management:**  Managing data pipelines, ensuring data quality and consistency, and handling data versioning.\n* **Model Development:** Building and training machine learning models using various algorithms and techniques.\n* **Model Deployment:** Deploying models into production environments, ensuring scalability and performance.\n* **Monitoring and Evaluation:** Tracking model performance, identifying issues, and triggering retraining as needed.\n* **Version Control:** Maintaining versions of code, data, and models for reproducibility and tracking.\n* **Infrastructure Automation:** Automating the deployment and management of ML infrastructure.\n* **Collaboration and Communication:** Facilitating collaboration among data scientists, engineers, and other stakeholders.\n\n**Benefits of MLOps:**\n\n* **Faster Time to Market:** Streamlined workflows enable quicker deployment of ML models.\n* **Improved Model Accuracy:**  Automated processes and consistent data ensure higher-quality models.\n* **Enhanced Scalability and Reliability:**  Robust infrastructure and automation handle increasing workloads.\n* **Increased Efficiency:**  Reduced manual effort and improved productivity.\n* **Better Collaboration:**  Clear processes and communication facilitate teamwork.\n* **Reduced Risk:**  Monitoring and automated retraining mitigate potential model drift.\n\n**Tools and Technologies:**\n\n* **Cloud Platforms:**  AWS, Azure, Google Cloud\n* **Containerization:**  Docker, Kubernetes\n* **Machine Learning Libraries:**  Scikit-learn, TensorFlow, PyTorch\n* **Model Deployment Tools:**  Kubeflow, MLflow\n* **Monitoring and Observability Tools:**  Prometheus, Grafana\n\n**In essence, MLOps bridges the gap between data science and software engineering, enabling organizations to leverage the power of machine learning effectively and sustainably.**\n\n\nDanish:\nMLOps er en samling af praksisser og v\xe6rkt\xf8jer, der hj\xe6lper med at automatisere og optimere maskinl\xe6ringslivscyklussen. Det handler om at bringe de bedste praksisser fra DevOps til maskinl\xe6ringsverdenen for at sikre, at maskinl\xe6ringsmodeller kan udvikles, implementeres og overv\xe5ges effektivt og p\xe5lideligt.\n\nHer er nogle af de vigtigste elementer i MLOps:\n\n* **Dataforberedelse og -kvalitet:** At sikre, at dataene bruges til at tr\xe6ne modeller er rene, konsistente og repr\xe6sentative for den virkelige verden.\n* **Modeltr\xe6ning og -evaluering:** Automatisering af processen med at tr\xe6ne og evaluere modeller for at finde den bedste pr\xe6station.\n* **Modeludrulning og -overv\xe5gning:** Automatiseret udrulning af modeller til produktionsmilj\xf8er og kontinuerlig overv\xe5gning for at sikre, at modellerne udf\xf8rer som forventet.\n* **Versionering og sporbarhed:** At holde styr p\xe5 alle \xe6ndringer til modeller, data og kode for at kunne spore problemer og forbedringer.\n* **Samarbejde og kommunikation:** At skabe en klar kommunikationslinje mellem datavidenskabsm\xe6nd, ingeni\xf8rer og forretningsfolk for at sikre, at alle er p\xe5 samme side.\n\nMLOps er en vigtig del af at skabe succesfulde maskinl\xe6ringsapplikationer, da det hj\xe6lper med at sikre, at modellerne er robuste, p\xe5lidelige og kan h\xe5ndtere \xe6ndringer i data og krav over tid.\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var t=i(6540);const a={},o=t.createContext(a);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);