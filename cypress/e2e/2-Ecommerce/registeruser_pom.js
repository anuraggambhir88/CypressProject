/// <reference types="cypress" />
var randomEmail = require('random-email');
import registerUser from "../../support/page_object/registeruser";

describe('Register User', () => {

    it('Register valid users', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const newuser = new registerUser()
        newuser.register("Test","test","98999920881","123456")
        cy.url().should('contains', 'https://ecommerce-playground.lambdatest.io/index.php');
        cy.get("h1").should("have.text"," Your Account Has Been Created!")

    });

});