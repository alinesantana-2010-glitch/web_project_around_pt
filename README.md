# Around The U.S.

## Descrição
Projeto web interativo onde o usuário pode explorar e compartilhar lugares incríveis dos Estados Unidos. Desenvolvido como parte do curso de desenvolvimento web da TripleTen.

## Funcionalidades
- Visualizar cartões de lugares com foto e nome
- Curtir cartões clicando no ícone de coração
- Excluir cartões com o botão de lixeira
- Adicionar novos locais via formulário com título e link de imagem
- Editar perfil com nome e descrição do usuário
- Visualizar imagem em tamanho maior ao clicar na foto do cartão
- Validação de formulários em tempo real com mensagens de erro
- Fechar pop-ups de três formas:
  - Botão ✕
  - Clique no overlay (área escura fora do pop-up)
  - Tecla Esc

## Tecnologias utilizadas
- HTML5
- CSS3 (Metodologia BEM, Grid, Flexbox, Media Queries)
- JavaScript ES6+

## Técnicas e arquitetura
- **Programação Orientada a Objetos (POO):** lógica de cartões e validação de formulário organizada em classes ES6 (`Card` e `FormValidator`), cada uma responsável por uma única tarefa.
- **Módulos ES6 (ES Modules):** código dividido em arquivos independentes (`Card.js`, `FormValidator.js`, `utils.js`, `index.js`), importados e exportados via `import`/`export`.
- **Validação nativa:** uso dos atributos HTML5 (`required`, `minlength`, `maxlength`) combinados com a propriedade `ValidityState` do JavaScript.
- **Template HTML:** elemento `<template>` para gerar a marcação dos cartões sem duplicar HTML.

## Como executar o projeto
Como o projeto usa módulos JavaScript (ES Modules), é necessário rodá-lo por um servidor local (ele não funciona abrindo o arquivo `index.html` direto no navegador). Recomenda-se a extensão **Live Server** no VSCode:
1. Instale a extensão Live Server.
2. Clique com o botão direito em `index.html`.
3. Selecione "Abrir com Live Server".

## Link do projeto
- Repositório: [GitHub](https://github.com/alinesantana-2010-glitch/web_project_around_pt)
- Demonstração: [GitHub Pages](https://github.com/alinesantana-2010-glitch/web_project_around_pt.git)

## 👤 Autor
Desenvolvido por **Aline Morais**
Curso: Desenvolvimento Web — TripleTen
GitHub: [@alinesantana-2010-glitch](https://github.com/alinesantana-2010-glitch)


