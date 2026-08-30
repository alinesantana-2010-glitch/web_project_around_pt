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
- **Programação Orientada a Objetos (POO):** toda a lógica da aplicação é organizada em classes ES6, cada uma responsável por uma única tarefa:
  - `Card` — renderiza e controla cada cartão (curtir, excluir, clique na imagem).
  - `Section` — renderiza uma lista de itens em um contêiner da página.
  - `Popup` — classe base que controla abertura/fechamento de pop-ups (clique no ✕, clique no overlay, tecla Esc).
  - `PopupWithImage` — herda de `Popup`; exibe imagem e legenda em tamanho maior.
  - `PopupWithForm` — herda de `Popup`; gerencia formulários dentro de pop-ups, coleta os valores dos campos e reseta o formulário ao fechar.
  - `UserInfo` — controla a leitura e atualização das informações do perfil (nome e descrição).
  - `FormValidator` — controla a validação em tempo real dos formulários.
- **Herança:** `PopupWithImage` e `PopupWithForm` estendem a classe `Popup`, reaproveitando a lógica de abrir/fechar e sobrescrevendo apenas o comportamento específico de cada uma.
- **Módulos ES6 (ES Modules):** código dividido em arquivos independentes — `Card.js`, `Section.js`, `Popup.js`, `PopupWithImage.js`, `PopupWithForm.js`, `UserInfo.js`, `FormValidator.js` e `index.js` — importados e exportados via `import`/`export`. O `index.js` concentra apenas a criação das instâncias das classes e os ouvintes de eventos.
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


