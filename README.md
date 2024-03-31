## Project Setup

First, install the packages required for the project

```bash
npm install
```

We are using the **Google Sheets API**. For that, we created the credentials using Semana da Computação's email on console.cloud.google.com.

Then, make sure you have the **Google Credentials** file to run the project. You must place it on "/app/util/g-credentials.json".

## Running the project

After following the steps above and meeting its requeriments, run in the terminal:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying project

Access the machine via ssh key. For that use:

```bash
ssh <user>@symcomp.ime.usp.br
```

Within the machine, access the folder where the site files are. For more information consult the techical members. To make the deploy, you must make sure the main branch is updated. Then, execute the following commands:

```bash
sudo docker exec -it 120d50346564 /bin/bash (esse id é o do container q ta rodando)
git pull
yarn
yarn build
exit
sudo docker restart 120d50346564
```