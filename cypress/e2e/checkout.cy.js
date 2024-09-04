/// <reference types="cypress" />


describe('Checkout - Luma Store', () => {
    before(() => {
        cy.visit('/');
    });

    it('Adicionando produto no carrinho com sucesso', () => {
        cy.searchAddProductToCart('shirt', '3');
        // Acessar o carrinho
        cy.visit('/checkout/cart');
        // Selecionar o método de checkout 
        cy.get('.checkout-methods-items > :nth-child(1) > .action').should('be.visible').click();
        cy.wait(10000);
        // Preencher o formulário de checkout
        cy.fixture('form').then((data) => {
            cy.fillCheckoutForm(data);
        });

        cy.wait(5000);
        // Continuar para a forma de pagamento
        cy.get('.button').should('be.visible').click();
        

        //Finalizar a compra
        cy.contains('button', 'Place Order', { timeout: 10000 }).should('be.visible').click();

        // Verificar se a compra foi finalizada com sucesso
        cy.get('.base').should('contain', 'Thank you for your purchase!');
    });
});
