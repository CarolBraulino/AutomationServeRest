# ServeRest Automation Tests

## Descrição do Projeto

Este repositório contém testes **End-to-End (E2E)** automatizados para:

- **Frontend:** [ServeRest Frontend](https://front.serverest.dev/)
- **API:** [ServeRest API](https://serverest.dev/)

Os testes são executados utilizando o **Cypress**.

---

## Tecnologias Utilizadas

- **JavaScript** - Linguagem principal dos testes.
- **Cypress** - Framework para automação de testes E2E e API.
- **Node.js** - Ambiente de execução JavaScript.
- **Faker** - Biblioteca para geração de dados fictícios.
- **Mochawesome Reports** - Geração de relatórios detalhados dos testes.

---

## Como Executar os Testes

### 1️. Clonar o Repositório e Instalar as Dependências

```sh
git clone https://github.com/CarolBraulino/AutomationServeRest.git
cd AutomationServeRest
npm install
```

### 2️. Executar Testes em Modo Headless (Sem Interface Gráfica)

```sh
npx cypress run
```

#### Executar Testes de API ou Frontend Específicos

```sh
npx cypress run --spec "cypress/e2e/API/**/*.cy.js"
npx cypress run --spec "cypress/e2e/Frontend/**/*.cy.js"
```

### 3️. Executar Testes com Interface Gráfica do Cypress

```sh
npx cypress open
```

- Selecione **E2E Testing** e escolha o navegador de preferência.

---

## Cenários de Teste Implementados

### API (Endpoints)

- **Login:** `POST`
- **Usuários:** `POST`, `GET`, `GET By ID`, `PUT`, `DELETE`
- **Produtos:** `POST`, `GET`, `GET By ID`, `PUT`, `DELETE`

### E2E (Funcionalidades do Frontend)

- Login e Logout
- Cadastro de usuário
- Cadastro de usuário como administrador
- Cadastro de produtos
- Adicionar produtos à lista de compras

---

## Integração Contínua (CI/CD)

Este projeto está integrado com **GitHub Actions**.

- A pipeline é acionada automaticamente a cada `push` ou `pull request` na branch `main`.
- O arquivo de configuração **workflow\.yml** garante a execução automatizada dos testes.

---

## Relatórios de Testes

Os relatórios de execução são gerados pelo **Mochawesome Reports**, que cria relatórios em formato **HTML e JSON** dentro da pasta:

```
cypress/reports/
```

---

### Links Importantes

- 📌 **ServeRest API:** [serverest.dev](https://serverest.dev/)
- 📌 **ServeRest Frontend:** [front.serverest.dev](https://front.serverest.dev/)
- 📌 **Cypress Documentation:** [https://docs.cypress.io/](https://docs.cypress.io/)

**Contribuições são bem-vindas!** Caso encontre algum problema ou tenha sugestões, abra uma *issue*. 😊

