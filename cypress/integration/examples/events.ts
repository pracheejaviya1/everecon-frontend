/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://everecon-frontend.vercel.app');
    // cy.visit('http://localhost:9000');
    cy.get('#username').type('evereconadmin');
    cy.get('#password').type('Test@1011');

    cy.get('#login-button').click();
  });

  it('explore-events', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get('#gatsby-focus-wrapper > div > div > div:nth-child(3) > h1').should(
      'contain.text',
      'Explore Events'
    );
    cy.get(
      '#gatsby-focus-wrapper > div > div > div:nth-child(3) > div > a > div > img'
    );
    cy.get(
      '#gatsby-focus-wrapper > div > div > div:nth-child(3) > a > span'
    ).should('contain.text', 'See more');
  });

  it('see-more', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get('#gatsby-focus-wrapper > div > div > div:nth-child(3) > h1').should(
      'contain.text',
      'Explore Events'
    );
    cy.get(
      '#gatsby-focus-wrapper > div > div > div:nth-child(3) > div > a > div > img'
    );
    cy.get('#gatsby-focus-wrapper > div > div > div:nth-child(3) > a > span')
      .should('contain.text', 'See more')
      .click();
    cy.get('#gatsby-focus-wrapper > div > div > div > h1').should(
      'contain.text',
      'Explore Events'
    );
  });

  it('open-events', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get('#gatsby-focus-wrapper > div > div > div:nth-child(3) > h1').should(
      'contain.text',
      'Explore Events'
    );
    cy.get(
      '#gatsby-focus-wrapper > div > div > div:nth-child(3) > div > a > div > img'
    ).click();
    cy.get(
      '#gatsby-focus-wrapper > div > div > div > div.flex.items-start.justify-between.w-full.my-2.font-inter > div.w-1\\/2.my-2 > h2'
    ).should('contain.text', 'Details');
  });
});
