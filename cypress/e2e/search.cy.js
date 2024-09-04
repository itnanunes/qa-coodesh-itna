/// <reference types="cypress" />


describe('Busca por shirt', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.searchProduct('shirt');
    cy.get('.product-item').last().click();
  });

  it('Deve buscar por "shirt", exibir resultados e clicar no ultimo resultado', () => {
  });

  it('Adicionar comentário em um produto', () => {
    cy.addCommentToProduct("itnsantana", "Elogio", "lero lero");
    cy.get('.actions-primary > .action').click()
    cy.wait(5000);// corrigir eero de timeout na geração de relatório
    cy.get('.message-success').should('be.visible')
    
  });
});
