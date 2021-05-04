/// <reference types="cypress" />

context('Actions', () => {
  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    cy.visit('http://localhost:8000/signin');
    cy.get('#header').should('have.class', 'flex');
  });

  it('.type() - type into a DOM element', () => {
    cy.visit('http://localhost:8000/View/Members');
    cy.get('#header').should('have.class', 'flex');
  });

  it('.type() - type into a DOM element', () => {
    cy.visit('http://localhost:8000/signin');
    cy.get('#header').should('have.class', 'flex');
  });

  it('.type() - type into a DOM element', () => {
    cy.visit('http://localhost:8000/signin');
    cy.get('#header').should('have.class', 'flex');
  });

  it('.type() - type into a DOM element', () => {
    cy.visit('http://localhost:8000/signup');
    cy.get('#header').should('have.class', 'flex');
  });
});
