// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('buscaProduto', (produto) => {

    cy.visit('/');
    cy.get('#search').type(produto)
    cy.contains('button', 'Search').click()
})

Cypress.Commands.add('adicionaProdutoNoCarrinho', () => {
   
    cy.visit('/men/tops-men/jackets-men.html');
    cy.get('.product-item').first().click()
    cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-49').click()
    cy.get('#product-addtocart-button').click()   
})

Cypress.Commands.add('cadastrarNovoUsuario', (firstName, lastName, email, password) => {
    cy.visit('/customer/account/create/')
    cy.get('#firstname').type(firstName)
    cy.get('#lastname').type(lastName)

   cy.get('fieldset[class*=account]').within(() => {
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(password)
        cy.get('input[name=password_confirmation]').type(password)
    })
  
    cy.contains('button', 'Create an Account').click()

})

Cypress.Commands.add('adicionaProdutoAleatorioMasculinoNoCarrinho', (produto) => {

    cy.visit('/men/tops-men.html');
    cy.get('.product-item').then(items => {
        const randomIndex = Cypress._.random(0, items.length - 1)
        cy.wrap(items[randomIndex]).click()
    //Aguarda a página do produto carregar
    cy.get('#product-addtocart-button', { timeout: 10000 }).should('be.visible')
    //seleciona tamanho
    cy.get('#option-label-size-143-item-166').click()
    //seleciona cor
    cy.get('.swatch-option.color').not('.disabled').then($colors => {
    const randomIndex = Cypress._.random(0, $colors.length - 1)
    cy.wrap($colors[randomIndex]).click({ force: true })
  }) 
    cy.get('#product-addtocart-button').click() 

    }) 
})
