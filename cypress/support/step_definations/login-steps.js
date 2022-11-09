import {
  Given,
  Before,
  When,
  Then,
  And,
} from "cypress-cucumber-preprocessor/steps";

Given("I visit the webdriver University", () => {
  cy.visit("http://www.webdriveruniversity.com/Login-Portal/index.html");
});

// When("I enter the username {username}", () => {
//   cy.get("#text").type(username);
// });

// And("I enter the {password}", (password) => {
//   cy.get("#password").type(password);
// });

// And("I click on login", () => {
//   cy.get("#login-button").click();
// });
