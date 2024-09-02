describe('Adicionar produtos no carrinho', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve buscar por um termo e adicionar um produto ao carrinho', () => {
    const termoDeBusca = 'bag';
    const quantity = '2';

    cy.searchAndAddProductToCart(termoDeBusca, quantity);
  });

  it('Adicionar um produto aleatório do catálogo de moda masculina no carrinho', () => {

    cy.get('.nav-3 > .level-top > span').click(); 

    // Obtém e seleciona um produto aleatório
    cy.selectRandomItem('.product-item-link');

    // Seleciona um tamanho aleatório
    cy.selectRandomSize();

    // Seleciona uma cor aleatória
    cy.selectRandomColor();

    // Adiciona no carrinho
    cy.get('#product-addtocart-button').click();

    cy.get('.message-success').should('be.visible')

   

  });
});
