/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://everecon-frontend.vercel.app');
    // cy.visit('http://localhost:9000');
    cy.get('#username').type('evereconadmin');
    cy.get('#password').type('Test@1011');

    cy.get('#login-button').click();
  });

  it('open-profile', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get(
      '#header > ul.flex.flex-row.justify-center > li:nth-child(2) > a'
    ).click();
    cy.get(
      '#gatsby-focus-wrapper > div > div.flex.flex-col.my-8.w-1\\/2.mx-auto.items-center.justify-center > div > div > div'
    ).should('contain.text', 'Following');
  });

  it('create-community', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get(
      '#header > ul.flex.flex-row.justify-center > li:nth-child(2) > a'
    ).click();
    cy.get(
      '#gatsby-focus-wrapper > div > div.flex.flex-col.my-8.w-1\\/2.mx-auto.items-center.justify-center > div > div > div.px-2 > a:nth-child(1)'
    )
      .should('contain.text', 'Create Community')
      .click();
    cy.get('body').should('contain.text', 'Create Community');
  });

  it('search-bar', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get('#header > div > input').type('ingenium');
    cy.get('#header > button').click();
    cy.get('body').should('contain.text', 'Search Results for ingenium');
  });
});
