/// <reference types="cypress" />

context('Actions', () => {
  it('signin-success', () => {
    cy.visit('https://everecon-frontend.vercel.app');

    cy.get('#username').type('evereconadmin');
    cy.get('#password').type('Test@1011');

    cy.get('#login-button').click();

    cy.get('body').should('contain.text', 'ABOUT US');
  });

  it('signin-failure', () => {
    cy.visit('https://everecon-frontend.vercel.app');

    cy.get('#username').type('evereconadmin');
    cy.get('#password').type('asdjsadjnsdajk');

    cy.get('#login-button').click();

    cy.get('body').should('include.text', 'Please, enter valid credentials');
  });
});
