/// <reference types="cypress" />

describe("Check radio button", () => {
  it("Check and radio button and get its value", () => {
    cy.visit("https://www.lambdatest.com/selenium-playground/radiobutton-demo");
    cy.get("[name='optradio'][value='Male']").should("not.be.checked");
    cy.get("[name='optradio']").check("Male");
    cy.get("[name='optradio'][value='Male']").should("be.checked");
    cy.contains("Get Checked value").click();
    cy.contains("is checked").should("include.text", "Male");
    cy.get("[name='optradio']").check("Female");
    cy.get("[name='optradio'][value='Female']").should("be.checked");
  });

  it("Check radio Male and Value 10-15", () => {
    cy.visit("https://www.lambdatest.com/selenium-playground/radiobutton-demo");
    cy.get("[name='gender'][value='Male']").should("not.be.checked");
    cy.get("[name='gender']").check("Male");
    cy.get("[name='gender'][value='Male']").should("be.checked");
    cy.get("[name='ageGroup']").check("5 - 15");
    cy.get("[name='ageGroup'][value='5 - 15']").should("be.checked");
    cy.contains("Get values").click();
    cy.get(".genderbutton").should("have.text", "Male");
    cy.get(".groupradiobutton").should("have.text", "5 - 15");
  });

  it.only("Check gender dynamically and set value dynamically", () => {
    cy.visit("https://www.lambdatest.com/selenium-playground/radiobutton-demo");
    cy.get("[name='gender']").each(($gender) => {
      cy.wrap($gender).as("childElement");
      cy.get("@childElement")
        .parent()
        .invoke("text")
        .then((message) => {
          if (message === "Male") {
            cy.log("Inside MALE");
            cy.wrap($gender).check();
          }
        });
    });
    cy.get("[name='gender'][value='Male']").should("be.checked");
  });
});
