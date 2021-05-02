/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

  it('cy.window() - get the global window object', () => {
    // https://on.cypress.io/window
    cy.window().should('have.property', 'top');
  });

  it('cy.document() - get the document object', () => {
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
  });

  it('cy.title() - get the logo', () => {
    // https://on.cypress.io/title
    cy.get('main').should('have.text', 'Sign In');
  });
});
