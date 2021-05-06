/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://everecon-frontend.vercel.app');
    // cy.visit('http://localhost:9000');
    cy.get('#username').type('evereconadmin');
    cy.get('#password').type('Test@1011');

    cy.get('#login-button').click();
  });

  it('explore-community', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get('#gatsby-focus-wrapper > div > div > div:nth-child(2) > h1').should(
      'contain.text',
      'Explore Communities'
    );
    cy.get(
      '#gatsby-focus-wrapper > div > div > div:nth-child(2) > div > a > div > img'
    );
    cy.get(
      '#gatsby-focus-wrapper > div > div > div:nth-child(2) > a > span'
    ).should('contain.text', 'See more');
  });

  it('see-more', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get('#gatsby-focus-wrapper > div > div > div:nth-child(2) > h1').should(
      'contain.text',
      'Explore Communities'
    );
    cy.get(
      '#gatsby-focus-wrapper > div > div > div:nth-child(2) > div > a > div > img'
    );
    cy.get('#gatsby-focus-wrapper > div > div > div:nth-child(2) > a > span')
      .should('contain.text', 'See more')
      .click();
    cy.get('#gatsby-focus-wrapper > div > div > div > h1').should(
      'contain.text',
      'Explore Communities'
    );
  });

  it('follow-unfollow', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get('#gatsby-focus-wrapper > div > div > div:nth-child(2) > h1').should(
      'contain.text',
      'Explore Communities'
    );
    cy.get(
      '#gatsby-focus-wrapper > div > div > div:nth-child(2) > div > a > div > img'
    );
    cy.get('#gatsby-focus-wrapper > div > div > div:nth-child(2) > a > span')
      .should('contain.text', 'See more')
      .click();
    cy.get('#gatsby-focus-wrapper > div > div > div > h1').should(
      'contain.text',
      'Explore Communities'
    );
    cy.get(
      '#gatsby-focus-wrapper > div > div > div > a > div > div.float-right > button'
    )
      .click({ waitForAnimations: true })
      .should('contain.text', 'Unfollow')
      .click({ waitForAnimations: true })
      .should('contain.text', 'Follow');
  });

  it('open-community', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get('#gatsby-focus-wrapper > div > div > div:nth-child(2) > h1').should(
      'contain.text',
      'Explore Communities'
    );
    cy.get(
      '#gatsby-focus-wrapper > div > div > div:nth-child(2) > div > a > div > img'
    ).click();

    cy.get(
      '#gatsby-focus-wrapper > div > div > div.flex.border-b-2.py-10.w-2\\/3.mx-auto.font-inter > div > button'
    )
      .should('contain.text', 'Follow')
      .click({ waitForAnimations: true })
      .should('contain.text', 'Unfollow')
      .click({ waitForAnimations: true })
      .should('contain.text', 'Follow');
  });
});
