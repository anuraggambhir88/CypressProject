import {
  Given,
  Before,
  When,
  Then,
  And,
} from "cypress-cucumber-preprocessor/steps";

let stub;

Before(() => {
  cy.log("Before Execution");
  stub = cy.stub();
});

Given("I visit the webdriver University", () => {
  cy.visit("http://www.webdriveruniversity.com/Login-Portal/index.html");
});

When("I enter the username {word}", (username) => {
  cy.get("#text").type(username);
});

And("I enter the password {word}", (password) => {
  cy.get("#password").type(password);
});

And("I click on login", () => {
  cy.get("#login-button").click();
  cy.on("window:alert", stub);
});

Then("I should be presented with {word} {word}", (message, message2) => {
  const alertMessage = message + " " + message2;
  cy.log(alertMessage);
  expect(stub.getCall(0)).to.be.calledWith(alertMessage);
});
