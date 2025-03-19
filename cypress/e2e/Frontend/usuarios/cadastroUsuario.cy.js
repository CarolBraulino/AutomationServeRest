import { faker } from '@faker-js/faker';

import '../../../support/commands'
const postUsuarios = require('../../API/usuarios/requests/postUsuarios')

const baseUrl = Cypress.config('baseUrl')

beforeEach(() => {
    cy.visit('/cadastrarusuarios')
})

const usuario = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password()
}

describe('Cadastro de Usuários', () => {
    it('Deve cadastrar usuário com sucesso', () => {
        cy.cadastrarUsuario(usuario.nome, usuario.email, usuario.password)

        cy.get('.alert').should('be.visible')
        cy.url().should('be.equal', `${baseUrl}/home`)
        cy.get('[data-testid="logout"]').should('be.visible')
    })

    it('Deve cadastrar usuário administrador com sucesso', () => {
        const email = faker.internet.email()
        cy.cadastrarUsuarioAdministrador(usuario.nome, email, usuario.password)
        cy.get('.alert').should('be.visible')
        cy.url().should('be.equal', `${baseUrl}/admin/home`)
        cy.get('[data-testid="logout"]').should('be.visible')
    })
})

context('Erros', () => {
    it('Não deve cadastrar com e-mail inválido', () => {
        const email = 'teste@teste'
        cy.cadastrarUsuario(usuario.nome, email, usuario.password)

        cy.contains('.alert', 'Email deve ser um email válido').should('be.visible')
        cy.url().should('be.equal', `${baseUrl}/cadastrarusuarios`)
    })

    it('Não deve cadastrar com email já cadastrado', () => {
        const nome = faker.person.fullName()
        const email = faker.internet.email()
        const password = faker.internet.password()
        const administrador = Math.random() < 0.5 ? 'true' : 'false'

        cy.api_postUsuarios(nome, email, password, administrador).then((response) => {
            expect(response.status).to.eq(201)
        })

        cy.cadastrarUsuario(usuario.nome, email, usuario.password)
        cy.contains('.alert', 'Este email já está sendo usado').should('be.visible')
    })

    it('Não deve cadastrar com campos obrigatórios vazios', () => {
        cy.cadastrarUsuarioComCamposVazios()

        cy.contains('.form', 'Nome é obrigatório').should('be.visible')
        cy.contains('.form', 'Email é obrigatório').should('be.visible')
        cy.contains('.form', 'Password é obrigatório').should('be.visible')
        cy.url().should('be.equal', `${baseUrl}/cadastrarusuarios`)
    })
})