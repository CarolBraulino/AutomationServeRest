import { faker } from '@faker-js/faker';

const putProdutos = require('../produtos/requests/putProdutos')
const postLogin = require('../login/requests/postLogin')
const postUsuarios = require('../usuarios/requests/postUsuarios')
const postProdutos = require('../produtos/requests/postProdutos')

let email, password, jwt, _id

beforeEach('Cadastrar usuário, fazer login e cadastrar produto', function () {
    const nome = faker.person.fullName()
    email = faker.internet.email()
    password = faker.internet.password()
    const administrador = 'true'

    cy.api_postUsuarios(nome, email, password, administrador).then((response) => {
        expect(response.status).to.eq(201)

        return cy.api_postLogin(email, password)
    }).then((response) => {
        expect(response.status).to.eq(200)
        jwt = response.body.authorization

        const nomeProduto = faker.commerce.productName()
        const preco = faker.number.int()
        const descricao = faker.commerce.productDescription()
        const quantidade = faker.number.int()

        return cy.api_postProdutos(nomeProduto, preco, descricao, quantidade, jwt)
    }).then((response) => {
        expect(response.status).to.eq(201)
        _id = response.body._id
    })
})

describe('PUT Produtos', () => {
    it('Deve editar produto com sucesso', () => {
        const nome = faker.commerce.productName()
        const preco = faker.number.int()
        const descricao = faker.commerce.productDescription()
        const quantidade = faker.number.int()

        cy.api_putProdutos(_id, nome, preco, descricao, quantidade, jwt).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.contain('Registro alterado com sucesso')
        })
    })

    it('Deve cadastrar quando id não existir', () => {
        const nome = faker.commerce.productName()
        const preco = faker.number.int()
        const descricao = faker.commerce.productDescription()
        const quantidade = faker.number.int()
        const novoId = faker.number.int()

        cy.api_putProdutos(novoId, nome, preco, descricao, quantidade, jwt).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.message).to.contain('Cadastro realizado com sucesso')
            expect(response.body._id).is.not.null
        })
    })
})

context('Erros', () => {
    it('Não deve editar com quantidade inválida', () => {
        const nome = faker.commerce.productName()
        const preco = faker.number.int()
        const descricao = faker.commerce.productDescription()
        const quantidade = faker.commerce.productName()

        cy.api_putProdutos(_id, nome, preco, descricao, quantidade, jwt).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('quantidade', 'quantidade deve ser um número')
        })
    })

    it('Não deve editar com nome existente', () => {
        const nome = faker.commerce.productName()
        const preco = faker.number.int()
        const descricao = faker.commerce.productDescription()
        const quantidade = faker.number.int()

        cy.api_putProdutos(_id, nome, preco, descricao, quantidade, jwt).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.contain('Registro alterado com sucesso')

            const nomeProduto2 = faker.commerce.productName()
            cy.api_postProdutos(nomeProduto2, preco, descricao, quantidade, jwt).then((response) => {
                expect(response.status).to.eq(201)
                const novoId = response.body._id

                cy.api_putProdutos(novoId, nome, preco, descricao, quantidade, jwt).then((response) => {
                    expect(response.status).to.eq(400)
                    expect(response.body.message).to.contain('Já existe produto com esse nome')
                })
            })
        })
    })

    it('Não deve editar com campos obrigatórios inválidos', () => {
        const nome = ''
        const preco = ''
        const descricao = ''
        const quantidade = ''

        cy.api_putProdutos(_id, nome, preco, descricao, quantidade, jwt).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.all.keys('nome', 'preco', 'descricao', 'quantidade');
            expect(response.body).to.deep.include({
                nome: 'nome não pode ficar em branco',
                preco: 'preco deve ser um número',
                descricao: 'descricao não pode ficar em branco',
                quantidade: 'quantidade deve ser um número'
            })
        })
    })
})

