
|  | Orange Share  |  |
|----------|----------|----------|
| Mentoria | ![image](https://user-images.githubusercontent.com/78885070/163495244-84f5c07e-c866-43f3-a3e9-04bb9961965b.png) | mentorados |


<h2>Sobre a aplicação</h2>

Esta aplicação ficará disponivél online onde você poderá testar suas funcionalidades hands-on

  Uma plataforma que promove o primeiro contato entre o quadro de funcionários da área de tecnologia da empresa FCamara, de modo a fomentar a aproximação de profissionais de diferentes níveis de atuação e níveis de experiências para a realização de um bate-papo ou de uma mentoria mais complexa.




Observações: 
1-	Esta aplicação ficará disponível online onde você poderá testar suas funcionalidades hands-on;
2-	Esta aplicação utiliza chaves proprietárias e conteúdo sensível que não permite ser compartilhado por motivos de sigilos de dados. Caso escolha realizar o clone do projeto para ser rodado localmente seguir passos do documento descritos na sessão Como rodar a aplicação localmente x,x,x criação de chave google x,x,x, configurar back-end utilizando Sanity.io  x,x,x

<h2>Como rodar a aplicação localmente</h2>

1 - Realizar clone do projeto 
1.a - Executar comando  + link do repositório 

  > git clone https://github.com/squad10fcamara/technical-share-squad-10-fcamara.git

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

2.a – Executar o comando: 

 > npm install

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

![image](https://user-images.githubusercontent.com/78885070/163495338-06a96fbf-7c06-4ddb-af39-bbac84bd8b8d.png)


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



<h2>Configurando Sanity e rodando localmente no projeto</h2>

4 - Link para suporte

https://www.sanity.io/docs/getting-started

4.a – Em seu terminal entrar na pasta backend_sanity-io  e executar o comando:

![image](https://user-images.githubusercontent.com/78885070/163497244-4abf6587-f0e3-48b6-9ae0-1b7130404d9d.png)


npm install --global @sanity/cli && sanity init

4.b - Após instalação local do sanity executar comando para iniciar servidor

 > Sanity start 



