<h1 align="center">
  Feedback Widget
</h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
</p>

## 💻 Projeto

Aplicação tem objetivo de envio de feedbacks do site, podendo ser um registro de bug, uma nova ideia ou então outro assunto.

Utilizado cada uma destas categorias, é possível inserir uma mensagem de texto e também uma screenshot para o registro e envio do feedback. Ao clicar em enviar, uma funcionalidade de e-mail fará o envio à uma caixa de e-mails cadastrada.

O projeto está separado em desenvolvimento Front-end utilizando React, desenvolvimento Back-end utilizando NodeJS.

<br>

<p align="center">
  <img alt="Imagem da aplicação web" src=web/src/components/assets/image.png>
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

### Front-end:
- [ReactJS](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [Tailwind CSS](https://tailwindcss.com/)

### Back-end:
- [NodeJS](https://nodejs.org/en/)
- [Prisma](https://www.prisma.io/)
- [Express](https://expressjs.com/pt-br/)


## 🚀 Como Executar

* 🌐 **Conectando-se à aplicação online**
    * Para acessar ao projeto em execução no ambiente da <b>Vercel</b>, acesse um dos seguintes links:

        [Link 1](https://widget-web-steel.vercel.app/) 

    * Feito isso, a página aparecerá sem nenhum conteúdo além do ícone no canto inferior direito. Clicando sobre ele, será possível visualizar as opções de feedback.

<br>

* 🧑‍💻 **Conectando-se à aplicação localmente**
    * No [Github](https://github.com/jaquelinepires/Widget-web.git), faça um clone deste projeto em sua máquina com o seguinte comando:
        ```
        git clone https://github.com/jaquelinepires/Widget-web.git
        ```
    * Verá que há duas pastas, uma referente à aplicação web, e uma referente à api back-end.
    * Faça uma cópia dos arquivos .env.local (pasta web) e .env (pasta server) e renomeie ambos removendo o nome "-sample". É necessário que sejam preenchidos os dados dentro destes arquivos.

  * 🖥️ **Aplicação web**  
    * Execute ```yarn run dev``` tanto no diretório da api back-end quanto no projeto front-end para iniciar a aplicação.
    * A aplicação estará disponível em http://localhost:3000
---
Feito com ♥ by Jaqueline Pires

