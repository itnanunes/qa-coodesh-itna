import { faker } from '@faker-js/faker';
import axios from 'axios';

Cypress.Commands.add('searchAddProductToCart', (productName, quantity) => {
  cy.get('#search').type(`${productName}{enter}`);
  cy.get('.product-item-link').first().click();
  cy.get('#option-label-size-143-item-166').click();
  cy.get('#option-label-color-93-item-50').click();
  cy.get('#qty').clear().type(quantity);
  cy.get('#product-addtocart-button').click();
});

Cypress.Commands.add('fillCheckoutForm', (data) => {
    cy.get('#customer-email').type(data.email);
    cy.get('input[name="firstname"]').should('be.visible').type(data.firstname);
    cy.get('input[name="lastname"]').should('be.visible').type(data.lastname);
    cy.get('input[name="company"]').should('be.visible').type(data.company);
    cy.get('input[name="street[0]"]').should('be.visible').type(data.street);
    cy.get('input[name="city"]').should('be.visible').type(data.city);
    cy.get('select[name="region_id"]').should('be.visible').select(data.region);
    cy.get('input[name="postcode"]').should('be.visible').type(data.postcode);
    cy.get('select[name="country_id"]').should('be.visible').select(data.country);
    cy.get('input[name="telephone"]').should('be.visible').type(data.telephone);
});

//Preencher formuláario de cadastro
Cypress.Commands.add('fillRegisterForm', () => {
  const fakeData = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    passwordconfirm: faker.internet.password(),
  };

  cy.get('input[name="firstname"]').should('be.visible').type(fakeData.firstname);
  cy.get('input[name="lastname"]').should('be.visible').type(fakeData.lastname);
  cy.get('input[name="email"]').should('be.visible').type(fakeData.email);
  //cy.get('input[name="password"]').should('be.visible').type(fakeData.password);
  cy.get('#password').should('be.visible').type(fakeData.password);
  cy.get('input[name="password_confirmation"]').should('be.visible').type(fakeData.password);
});


// Comando para buscar e adicionar um produto ao carrinho
Cypress.Commands.add('searchAndAddProductToCart', (searchTerm, quantity) => {
  cy.get('input[name="q"]').type(`${searchTerm}{enter}`);
  cy.get('.product-item-link').first().click();
  cy.get('#qty').clear().type(`${quantity}{enter}`);
  cy.get('#product-addtocart-button').click();
  cy.get('.message-success').should('contain.text', 'You added');
});

// Comando para selecionar um item aleatório de uma lista
Cypress.Commands.add('selectRandomItem', (selector) => {
  cy.get(selector).then($items => {
    const randomIndex = Math.floor(Math.random() * $items.length);
    cy.wrap($items[randomIndex]).click();
  });
});

// Comando para garantir que a lista esteja visível e selecionar um item aleatório
Cypress.Commands.add('selectRandomSize', () => {
  cy.get('.swatch-attribute.size').should('be.visible');
  cy.selectRandomItem('.swatch-attribute.size .swatch-option');
});

// Comando para garantir que a lista de cores esteja visível e selecionar uma cor aleatória
Cypress.Commands.add('selectRandomColor', () => {
  cy.get('.swatch-attribute.color').should('be.visible');
  cy.get('.swatch-attribute.color .swatch-option').should('have.length.greaterThan', 0);
  cy.selectRandomItem('.swatch-attribute.color .swatch-option');
});

// Comando para buscar um produto
Cypress.Commands.add('searchProduct', (productName) => {
  cy.get('input[name="q"]').type(`${productName}{enter}`);
  cy.url().should('include', `catalogsearch/result/?q=${productName}`);
  cy.get('.product-item').should('have.length.greaterThan', 0);
  cy.get('.base').should('contain.text', `Search results for: '${productName}'`);

});

Cypress.Commands.add('addCommentToProduct', (nickname, summary, review) => {
  cy.get('#tab-label-reviews-title').click();
  cy.get('#Rating_3_label').click({ force: true });
  cy.get('#nickname_field').type(nickname);
  cy.get('#summary_field').type(summary);
  cy.get('#review_field').type(review);
});



// Comando customizado para buscar dados de um usuário aleatório
Cypress.Commands.add('fetchRandomUser', () => {
  // URL da API do RandomUser.me
  const apiUrl = 'https://randomuser.me/api/';

  // Retorna uma promessa com os dados do usuário
  return cy.wrap(
    axios.get(apiUrl).then(response => response.data.results[0])
  );
});
