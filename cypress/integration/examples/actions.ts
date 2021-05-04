/// <reference types="cypress" />

context('Actions', () => {
  // https://on.cypress.io/interacting-with-elements

  it('signin', () => {
    cy.visit('http://localhost:9000');

    cy.get('#username').type('evereconadmin');
    cy.get('#password').type('Test@1011');

    cy.get('#login-button').click();

    cy.get('body').should('include.text', 'ABOUT US');
  });

  it('signin', () => {
    cy.visit('http://localhost:9000');

    cy.get('#username').type('evereconadmin');
    cy.get('#password').type('asdjsadjnsdajk');

    cy.get('#login-button').click();

    cy.get('body').should('include.text', 'Please, enter valid credentials');
  });
});
