
/// <reference types="cypress" />
import { faker } from '@faker-js/faker';


describe('Cadastro - Luma Store', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  afterEach(() => {
    cy.fillRegisterForm(); // Preenche o formulário com dados fictícios
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success').should('be.visible')
  });

  it('Criando cadastro na tela de login', () => {
    cy.get('.panel > .header > .authorization-link > a').click();
    cy.get('a.action.create.primary').click();
  });

  it('Criando cadastro clicando no botão de cadastro', () => {
    cy.visit('customer/account/create/')
  });
});
