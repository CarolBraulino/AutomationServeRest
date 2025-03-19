# API

Este diretório contém os testes de ponta a ponta (e2e) para a API do projeto, organizados nas seguintes pastas:

- **login**: Contém testes relacionados ao processo de autenticação de usuários via API.
- **produtos**: Contém testes relacionados às funcionalidades de produtos via API.
- **usuarios**: Contém testes relacionados ao gerenciamento de usuários via API.

## Estrutura das Pastas

### 1. Pasta `login`

Contém o seguinte arquivo de teste:

- **`postLogin.cy.js`**: Testa o endpoint de login de usuários.

### 2. Pasta `produtos`

Contém os seguintes arquivos de teste:

- **`postProduto.cy.js`**: Testa a criação de um novo produto via API.
- **`getProdutos.cy.js`**: Testa a recuperação da lista de produtos cadastrados.
- **`getProdutoPorId.cy.js`**: Testa a recuperação de um produto específico pelo ID.
- **`putProduto.cy.js`**: Testa a edição de produtos existentes.
- **`deleteProduto.cy.js`**: Testa a exclusão de produtos.

### 3. Pasta `usuarios`

Contém os seguintes arquivos de teste:

- **`postUsuario.cy.js`**: Testa a criação de um novo usuário via API.
- **`getUsuarios.cy.js`**: Testa a recuperação da lista de usuários cadastrados.
- **`getUsuarioPorId.cy.js`**: Testa a recuperação de um usuário específico pelo ID.
- **`putUsuario.cy.js`**: Testa a edição de usuários existentes.
- **`deleteUsuario.cy.js`**: Testa a exclusão de usuários.
