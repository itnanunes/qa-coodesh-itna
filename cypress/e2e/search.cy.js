/// <reference types="cypress" />


describe('Busca por shirt', () => {

  before(() => {
    cy.visit('/');
    cy.searchProduct('shirt');
    cy.get('.product-item').last().click();
  });

  it('Deve buscar por "shirt" e exibir resultados', () => {
    // Seleciona e clica no último produto da lista de resultados
  });

  it('Adicionar comentário em um produto', () => {

    // Adicionar comentário em um produto
    cy.addCommentToProduct("itnsantana", "Elogio", "lero lero");
    cy.get('.actions-primary > .action').click()
    cy.get('.message-success').should('be.visible')
  });
});
