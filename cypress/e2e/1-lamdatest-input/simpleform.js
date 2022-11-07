/// <reference types="cypress" />



describe('Simple form Suite', () => {
    before(() => {
        cy.fixture("input").then((data)=>{
            globalThis.inputdata = data
        })       
    });

    beforeEach(() => {
        cy.visit(Cypress.env("baseURL"))
        cy.get('a[href*="simple-form-demo"]').click()
    });

    it('check input form value', () => {
        
        cy.get('#user-message').type(inputdata.text)
        cy.get('#showInput').click()
        cy.get("#message").should("have.text",inputdata.text)
        
    });

    it('check total of two numbers', () => {
        cy.get("#sum1").type("2")
        cy.get("#sum2").type("3")
        cy.contains("Get values").click()
        cy.get("#addmessage").then(($selector)=>{
            expect($selector.text()).to.eql("5")
        })
        cy.get("#addmessage").invoke("text").should("eq","5")


    });

    
});