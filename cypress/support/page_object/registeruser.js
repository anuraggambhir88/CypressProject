class registerUser {
  element = {
    firstName: () => cy.get("#input-firstname"),
    lastName: () => cy.get("#input-lastname"),
    email: () => cy.get("#input-email"),
    phone: () => cy.get("#input-telephone"),
    password: () => cy.get("#input-password"),
    conPassword: () => cy.get("#input-confirm"),
    yesRadio: () =>
      cy.get(".custom-radio:nth-child(1) > .custom-control-label"),
    agreeTerms: () => cy.get("#input-agree"),
    confirmButton: () => cy.get(".btn:nth-child(2)"),
  };

  register(firstName, lastName, phoneNumber, password) {
    var randomEmail = require("random-email");
    this.element.firstName().type(firstName);
    this.element.lastName().type(lastName);
    this.element.email().type(randomEmail());
    this.element.phone().type(phoneNumber);
    this.element.password().type(password);
    this.element.conPassword().type(password);
    this.element.yesRadio().click();
    this.element.agreeTerms().check({ force: true });
    this.element.confirmButton().click();
  }
}
export default registerUser;
