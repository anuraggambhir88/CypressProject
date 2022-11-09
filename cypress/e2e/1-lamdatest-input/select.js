describe("Suite to check Select Drop Down feature", () => {
  beforeEach(() => {
    cy.visit(
      "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
    );
  });

  it("click on Select and select sunday", () => {
    cy.get("#select-demo")
      .select(1, { force: true })
      .should("have.value", "Sunday");

    cy.get("#select-demo").select("Monday").should("have.value", "Monday");
  });

  it.only("Multi Select", () => {
    cy.get("[name='States']").select(["New York", "Ohio"]);
  });
});
