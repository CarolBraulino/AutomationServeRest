// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('cadastrarUsuario', (nome, email, password) => {
    cy.get('[data-testid="nome"]').type(nome)
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(password)
    cy.get('[data-testid="cadastrar"]').click()
})

Cypress.Commands.add('cadastrarUsuarioAdministrador', (nome, email, password) => {
    cy.get('[data-testid="nome"]').type(nome)
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(password)
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"]').click()
})

Cypress.Commands.add('cadastrarUsuarioComCamposVazios', () => {
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"]').click()
})

Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type(password)
    cy.get('[data-testid="entrar"]').click()
})

Cypress.Commands.add('loginComCamposVazios', () => {
    cy.get('[data-testid="entrar"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('[data-testid="logout"]').click()
})

Cypress.Commands.add('cadastrarUsuarioMenuCadastro', (nome, email, password) => {
    cy.get('[data-testid="cadastrarUsuarios"]').click()
    cy.get('[data-testid="nome"]').type(nome)
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(password)
    cy.get('[data-testid="cadastrarUsuario"]').click()
})

Cypress.Commands.add('cadastrarUsuarioAdminMenuCadastro', (nome, email, password) => {
    cy.get('[data-testid="cadastrarUsuarios"]').click()
    cy.get('[data-testid="nome"]').type(nome)
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(password)
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrarUsuario"]').click()
})

Cypress.Commands.add('cadastrarUsuarioMenuCadastroComCamposVazios', () => {
    cy.get('[data-testid="cadastrarUsuarios"]').click()
    cy.get('[data-testid="cadastrarUsuario"]').click()
})

