import { faker } from '@faker-js/faker';


describe('DESAFIO QA', () => {

  context('Testes Luma Store', () => {

    it('verifica se a HomePage está carregando corretamente', () => {
      cy.visit('/');
      cy.title().should('eq','Home Page');
  
      
    })
  
    it('busca por shirt e verifica se a página de resultados carregou corretamente', () => {
      
     const produto = 'shirt'
     cy.buscaProduto(produto)
      
      //valida resultado
      cy.url().should('include', 'catalogsearch/result')
      cy.get('.products-grid').should('be.visible')
    })
  
    it('adicionar um produto no carrinho', () => {
      
      cy.adicionaProdutoNoCarrinho()
      
       //valida produto adicionado no carrinho
      cy.get('.message-success').should('contain', 'You added')
      
   
    })

    it('adicionar um produto aleatório moda masculina no carrinho', () => {
      
      cy.adicionaProdutoAleatorioMasculinoNoCarrinho()
      
       //valida produto adicionado no carrinho
      cy.get('.message-success').should('contain', 'You added')
      
   
    })
  
    it('realiza checkout', () => {
      
       // adiciona o produto no carrinho
      cy.visit('/checkout');
  
      //TODO pra fazer checkout precisa logar
  
  
    })
  
    it('cadastrar novo usuario', () => {
  
      const randomName = faker.name.firstName()
      const randomLastName = faker.name.lastName()
      const email = faker.internet.email(randomName,randomLastName)
      const password = faker.internet.password() + ('*')
      
      cy.cadastrarNovoUsuario(randomName, randomLastName, email, password)
      
       //valida cadastro com Sucesso
       cy.get('.message-success > div')
       .should('have.text', 'Thank you for registering with Main Website Store.')
       .and('be.visible')
  
   
    })
  
  

  })


})