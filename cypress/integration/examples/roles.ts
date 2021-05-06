/// <reference types="cypress" />

context('Actions', () => {
  it('core', () => {
    cy.visit('https://everecon-frontend.vercel.app');

    cy.get('#username').type('notjohndoe');
    cy.get('#password').type('guessilldie');

    cy.get('#login-button').click();

    cy.get('body').should('contain.text', 'ABOUT US');

    cy.get(
      '#gatsby-focus-wrapper > div > div > div:nth-child(2) > div > a:nth-child(1)'
    ).click();

    cy.get(
      '#gatsby-focus-wrapper > div > div > div.flex.border-b-2.py-10.w-2\\/3.mx-auto.font-inter > div > button'
    ).should('contain.text', 'New Event');

    cy.get(
      '#gatsby-focus-wrapper > div > div > div.m-auto.w-2\\/3.py-4.font-inter.text-lg.justify-between.flex > div.flex.items-end.align-center.flex-col.w-4\\/5 > button'
    ).should('contain.text', 'Update Community');

    cy.go('back');
    cy.get(
      '#gatsby-focus-wrapper > div > div > div:nth-child(2) > div > a:nth-child(2)'
    ).click();

    cy.get(
      '#gatsby-focus-wrapper > div > div > div.flex.border-b-2.py-10.w-2\\/3.mx-auto.font-inter > div > button'
    ).should('contain.text', 'Follow');
  });

  it('volunteer', () => {
    cy.visit('https://everecon-frontend.vercel.app');

    cy.get('#username').type('rajeshkumar');
    cy.get('#password').type('guessilldie');

    cy.get('#login-button').click();

    cy.get('body').should('contain.text', 'ABOUT US');

    cy.get(
      '#gatsby-focus-wrapper > div > div > div:nth-child(2) > div > a:nth-child(1)'
    ).click();

    cy.get(
      '#gatsby-focus-wrapper > div > div > div.flex.border-b-2.py-10.w-2\\/3.mx-auto.font-inter > div > button'
    ).should('contain.text', 'Follow');

    cy.go('back');
    cy.get(
      '#gatsby-focus-wrapper > div > div > div:nth-child(2) > div > a:nth-child(2)'
    ).click();

    cy.get(
      '#gatsby-focus-wrapper > div > div > div.flex.border-b-2.py-10.w-2\\/3.mx-auto.font-inter > div > button'
    ).should('contain.text', 'Follow');
  });
});
