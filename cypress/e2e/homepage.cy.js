/// <reference types="cypress" />

describe('Home Page', () => {
    it('Verifica se a home page carrega corretamente', () => {
      cy.visit('/');
      cy.get('header').should('be.visible');
      cy.get('footer').should('be.visible');
  
    });
  });
  