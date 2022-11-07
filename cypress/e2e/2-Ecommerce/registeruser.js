/// <reference types="cypress" />
var randomEmail = require('random-email');

describe('Register User', () => {

    it('Register valid users', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        cy.get('#input-firstname').type('Test');
        cy.get('#input-lastname').type('test');
        cy.get('#input-email').type(randomEmail());
        cy.get('#input-telephone').type('9899920881');
        cy.get('#input-password').type('123456');
        cy.get('#input-confirm').type('123456');
        cy.get('.custom-radio:nth-child(1) > .custom-control-label').click();
        cy.get('#input-agree').check({force:true})
        cy.get('.btn:nth-child(2)').click();
        cy.url().should('contains', 'https://ecommerce-playground.lambdatest.io/index.php');
        cy.get("h1").should("have.text"," Your Account Has Been Created!")

    });

});