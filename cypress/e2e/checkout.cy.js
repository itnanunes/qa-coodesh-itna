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

        cy.wait(5000);
        // Preencher o formulário de checkout
        
        cy.fixture('form').then((data) => {
            cy.fillCheckoutForm(data);
        });

        cy.wait(5000);
        // Continuar para a forma de pagamento
        cy.get('button[data-role="opc-continue"]').click();
        ;

        //Finalizar a compra
        cy.contains('button', 'Place Order').click();

        // Verificar se a compra foi finalizada com sucesso
        cy.contains('Thank you for your purchase!').should('be.visible');
    });
});
