/// <reference types="cypress" />


describe('Checkout Single Product Inventory', () => {

    it('cod order', () => {

        cy.visit("https://preprod.nykaa.com");
        cy.title().should("contains","Buy Cosmetics Products")
        cy.url().should("contains.text","preprod.nykaa.com")
        
    });
    
});