# ProjectMyContacts

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

<p align="center">
  <a href="https://ibb.co/3Wq4x0h"><img src="https://i.ibb.co/ctHkWNT/Home.png" alt="Home" border="0"></a>
</p>

## 🚀 Tecnologias

Tecnologias utilizadas durante o projeto:

- [ReactJS](https://pt-br.reactjs.org/)
- [NodeJS](https://nodejs.org/en/)
- [JavaScript](https://www.javascript.com/)
- [Express](https://expressjs.com/pt-br/)
- [Docker](https://www.docker.com/)
- [Postgres](https://www.postgresql.org/)
- [Styled Components](https://styled-components.com/)
- [Eslint](https://eslint.org/)
- [EditorConfig](https://editorconfig.org/)

## ⭐ Funcionalidades implantadas - Front-end
- React Router Dom - Sistemas de Rotas
- Componentes Reutilizaveis e Dinâmicos
- Contatos ordenados de forma crescente e decrescente
- Tela de Loading / Spinner dinâmico
- Hook Personalizado
- CSS-in-JS
- CRUD
- Responsividade

## ⭐ Conceitos implantados - Back-end
- Responsabilidade Única (Separados por folders controllers, repositories e middlewares)
- [Conexão com o nosso Container no Docker (folder - database)](https://yarnpkg.com/package/pg)
- Criação da DATABASE, Tabelas, linhas e utilizando o uuid-ossp para geração do id
- Sistema de rotas utilizando o Express
- CRUD

## 💻 Projeto

Projeto que permite você realizar o registro de um contato, editar, deletar, ordenar de forma crescente e decrescente e pesquisar o seu contato através de seu nome.

## 😎 Iniciando 

📖 Para rodar o projeto localmente você precisará seguir algumas instruções.

- É necessário que o <a href="https://nodejs.org/en/">NodeJS</a> esteja instalado em sua máquina.
- É necessário que o <a href="https://www.docker.com/">Docker</a> esteja instalado em sua máquina.
- É necessário utilizar <a href="https://classic.yarnpkg.com/en/">Yarn</a> ou <a href="https://www.npmjs.com/">Npm</a> para a instalação de pacotes.

### Instalação
```bash
# Clone o repositório
git clone https://github.com/larissadantier/MyContacts.git

# Instale todos os pacotes

- Npm
npm install

- Yarn
yarn install

# Rodar o Docker - Postgres[https://hub.docker.com/_/postgres]

- Comandos
Baixando a imagem - postgres: docker pull postgres
Criando o container: docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres (Já inicia automaticamente)
Caso não tenha iniciado o container, faça o seguinte comando: docker start pg
Verificar se o container está rodando: docker ps


```
## 🔖 Layout

Visualize o layout do projeto através do link a seguir:

- [Layout Web](https://www.figma.com/file/zhAwjW2RimyjccDgiY6luz/MyContacts) 
