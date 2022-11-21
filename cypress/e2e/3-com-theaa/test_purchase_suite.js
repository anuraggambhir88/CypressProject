///<reference types="cypress" />
///<reference types="cypress-xpath" />

import BookLesson from "./../../support/page_object/booklession";

describe("Purchase flow", () => {
  let newUrl;
  it("Test01_book_driving_lession", () => {
    cy.visit("https://www.theaa.com/");
    cy.wait(2000);
    const bookLession = new BookLesson();
    bookLession.acceptCookie();
    cy.xpath("//a[text() = 'Vehicle']").click();
    cy.xpath("//a[text() = 'Learning to drive ']").trigger("mouseover", {
      waitForAnimations: false,
      force: true,
    });
    cy.xpath("//a[text() = 'Book driving lessons']").click();
    cy.get(".button.ra.primary.shadow").click();
    cy.get("[data-test='postcode-field-input']").type("BS79EG");
    cy.get('[data-test="continue-button"]').click();
    cy.get('[data-test="face-covering-continue-button"]').click();
    cy.get('[data-test="learn-to-drive-option"]').click();
    cy.get(".MuiButton-label").click();

    cy.window().then((win) => {
      cy.stub(win, "open")
        .callsFake((url, target) => {
          cy.task("setMyUniqueId", url);
          return win.open.wrappedMethod.call(win, url, "_self");
        })
        .as("open");
    });

    cy.get(
      '[data-test="list-item-D3C09998-07CA-492E-B388-6EE44B814052"]'
    ).click();

    cy.get("@open").should("have.been.calledOnce");

    // cy.url().then((url) => {
    //   cy.task("setMyUniqueId", url);
    // });
    // cy.reload();

    // cy.get("[data-test='prices-continue-button']").click();
  });

  it("New Broswer opening", () => {
    cy.task("getMyUniqueId").then((myUniqueId) => {
      cy.visit(myUniqueId);
      const bookLession = new BookLesson();
      cy.wait(5000);
      bookLession.acceptCookie();
    });
  });
});
