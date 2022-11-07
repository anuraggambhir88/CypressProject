/// <reference types="cypress" />

describe('Suite to check checkbox feature', () => {

    beforeEach(() => {
        const url = Cypress.env("baseURL") + "/checkbox-demo"
        cy.visit(url)
    });

    it('click on checkbox and check message', () => {
        cy.get("#isAgeSelected").check()
        cy.get("#isAgeSelected").should("be.checked")
        cy.get("#txtAge").should("have.text","Success - Check box is checked")
    });

    it('Select one checkbox ancd check its value', () => {

        cy.get(".cb-element").each(($element,index,$list)=>{
            cy.wrap($element).should("not.be.checked")
            if (index === 1) {
                cy.wrap($element).check()
                cy.wrap($list).eq(1).should("be.checked")
            }

            
        })
    });

    it('Check all check and uncheck functionality', () => {
        cy.get("#box").click()
        cy.get("#box").should("have.attr","value","uncheck all")

    });
});