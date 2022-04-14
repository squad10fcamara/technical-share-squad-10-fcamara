
|  | Orange Share  |  |
|----------|----------|----------|
| Mentoria | ![image](https://user-images.githubusercontent.com/78885070/163049797-4efd361a-5b1c-403d-b807-2154f94b6b86.png) | mentorados |


<h2>Sobre a aplicação</h2>

Esta aplicação ficará disponivél online onde você poderá testar suas funcionalidades hands-on

  Uma plataforma que promove o primeiro contato entre o quadro de funcionários da área de tecnologia da empresa FCamara, de modo a fomentar a aproximação de profissionais de diferentes níveis de atuação e níveis de experiências para a realização de um bate-papo ou de uma mentoria mais complexa.




Observações: 
1-	Esta aplicação ficará disponível online onde você poderá testar suas funcionalidades hands-on;
2-	Esta aplicação utiliza chaves proprietárias e conteúdo sensível que não permite ser compartilhado por motivos de sigilos de dados. Caso escolha realizar o clone do projeto para ser rodado localmente seguir passos do documento descritos na sessão Como rodar a aplicação localmente x,x,x criação de chave google x,x,x, configurar back-end utilizando Sanity.io  x,x,x

<h2>Como rodar a aplicação localmente</h2>

1 - Realizar clone do projeto 
1.a - Executar comando  + link do repositório 
git clone https://github.com/squad10fcamara/technical-share-squad-10-fcamara.git

1.b - Após a criação do projeto o arquivo package-lock.json ficara disponível contendo todas as dependências necessárias para que a aplicação funcione localmente. 

"@hookform/resolvers": "^2.8.8",

        "@sanity/client": "^3.1.0",
        
        "@sanity/image-url": "^1.0.1",
        
        "@testing-library/jest-dom": "^5.14.1",
        
        "@testing-library/react": "^12.0.0",
        
        "@testing-library/user-event": "^13.2.1",
        
        "react": "^17.0.2",
        
        "react-dom": "^17.0.2",
        
        "react-google-login": "^5.2.2",
        
        "react-hook-form": "^7.29.0",
        
        "react-icons": "^4.3.1",
        
        "react-input-mask": "^2.0.4",
        
        "react-loader-spinner": "^6.0.0-0",
        
        "react-masonry-css": "^1.0.16",
        
        "react-router-dom": "^6.2.1",
        
        "react-scripts": "5.0.0",
        
        "uuid": "^8.3.2",
        
        "web-vitals": "^2.1.0",
        
        "yup": "^0.32.11"

2 – Entrar na pasta do projeto technical-share-squad-10-fcamara através do terminal 

2.a – Executar o comando: npm install

2.b – As dependências descritas na sessão 1.b serão instalados. 

2.c – A partir deste ponto a estrutura da aplicação ficara disponível para ser rodada localmente sendo apresentado apenas a estrutura de páginas e seus componentes, telas de login, tela principal da aplicação, sidebars e itens afins mas não terá a captura de login de usuário de autenticação google e a disposição de dados do perfil de usuário presentes na aplicação online, caso escolha testar a aplicação utilizando autenticação google e o uso do sanity.io para backend seguir para sessão Configurando Chave para login google e Sanity. 

2.d - Executar comando para iniciar aplicação: npm run dev

2.e - Você poderá navegar entre os componentes alterando a url  de seu navegador seguindo os links abaixo ou acionando os botões disponíveis na aplicação. 

http://localhost:3000/login 

http://localhost:3000

http://localhost:3000/user-profile/

Configurando Chave para login google e Sanity. 

3 – No mesmo nível hierárquico da pasta do projeto technical-share-squad-10-fcamara
Realizar a criação do arquivo .env conforme a imagem abaixo



![image](https://user-images.githubusercontent.com/78885070/163312830-cdb9152b-e085-4153-9dca-3f689001acd5.png)


3.a – O arquivo .env deverá conter seu token google e id/token sanity, seguir respectiva documentação para sua criação.

 Google Api Token e id/Sanity Token 
 
REACT_APP_GOOGLE_API_TOKEN =

REACT_APP_SANITY_PROJECT_ID =

REACT_APP_SANITY_TOKEN =

	Links de suporte:
  
https://console.cloud.google.com/

https://www.youtube.com/watch?v=92RkvBuIcts

3.b - Login OAuth - Google

<h2>Configuração para o ambiente de desenvolvimento</h2>

 Passo a passo:
 
1. Criar um novo projeto

3. Clicar em "APIs e serviços"

5. Clicar em "Credenciais"

7. Clicar em "Criar credenciais"

    - Selecionar a opção "ID do cliente OAuth"
    
    - Clicar em "Configurar a tela de consentimento"
    
    - Selecionar a opção "Externa" // aplicação externa
    
    - Na "Tela de permissão OAuth"
    
    a) Aba 1 Preencher:
       - O nome do app > "technical-share" < neste formato
       - E-mail para o suporte de usuário "seu e-mail do Google"
       - Dados de contato do desenvolvedor "seu e-mail do Google"
       - Clicar em Salvar & Continuar
    b) Escopos
          - Não preencher nada 
          - Clicar em Salvar & Continuar
    c) Usuários de teste
          - Não preencher nada 
          - Clicar em Salvar & Continuar
    d) Vai mostrar um resumo do App
       - No final do resumo clicar em voltar para o painel
5. Clicar em "Tela de permissão OAuth"
    - Selecionar a opção "PUBLICAR APLICATIVO"
    - Clicar em "confirmar"
6. Clicar em "Credenciais"
    - Clicar em "Criar credenciais"
    - Selecionar a opção "ID do cliente OAuth"
    - Em "Tipo de aplicativo" selecionar a opção "Aplicativo da Web"
    - Em "Origens Javascript autorizadas" clicar em "ADICIONAR URI"
    - Digitar nosso endereço de desenvolvimento: "http://localhost:3000/"
Feito isso vai aparecer um Pop up com as credenciais que precisamos:
    - Seu ID de cliente
    - Sua chave secreta de cliente 
ps. Essas 2 informações são sensiveis, copie elas e salve em um arquivo a parte. 
ps do ps. A chave secreta do cliente não é mostrada novamente, caso não a salve vai ter que reptir o procedimento.
Google Cloud Platform
Google Cloud Platform lets you build, deploy, and scale applications, websites, and services on the same infrastructure as Google.






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
