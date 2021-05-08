/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://everecon-frontend.vercel.app');
    // cy.visit('http://localhost:9000');
    cy.get('#username').type('evereconadmin');
    cy.get('#password').type('Test@1011');

    cy.get('#login-button').click();
  });

  it('open-settings', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get(
      '#header > ul.flex.flex-row.justify-center > li.mt-4.mx-8 > a'
    ).click();
    cy.get(
      '#gatsby-focus-wrapper > div > div > div.flex.flex-col.my-8.justify-center.items-start.ml-12.mr-0.w-full > form:nth-child(3) > div.flex.my-4.mr-4.flex-col > input'
    )
      .clear()
      .type('Dhruvil');
    cy.get(
      '#gatsby-focus-wrapper > div > div > div.flex.flex-col.my-8.justify-center.items-start.ml-12.mr-0.w-full > div.flex.items-end.justify-between.border-b-2.pb-4.w-2\\/3 > ul > button.mx-2.text-green-500.font-inter'
    )
      .should('contain.text', 'Save')
      .click()
      .wait(100);

    cy.get(
      '#gatsby-focus-wrapper > div > div > div.flex.flex-col.my-8.justify-center.items-start.ml-12.mr-0.w-full > form:nth-child(3) > div.flex.my-4.mr-4.flex-col > input'
    )
      .clear()
      .type('Everecon');
    cy.get(
      '#gatsby-focus-wrapper > div > div > div.flex.flex-col.my-8.justify-center.items-start.ml-12.mr-0.w-full > div.flex.items-end.justify-between.border-b-2.pb-4.w-2\\/3 > ul > button.mx-2.text-green-500.font-inter'
    )
      .should('contain.text', 'Save')
      .click();
    cy.reload();
  });

  it('sign-out', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get(
      '#header > ul.flex.flex-row.justify-center > li.mt-4.mx-8 > a'
    ).click();
    cy.get(
      '#gatsby-focus-wrapper > div > div > div.flex.flex-col.my-8.justify-center.items-start.ml-12.mr-0.w-full > div.w-2\\/3.pt-4.flex.items-start.justify-between > button'
    ).click();
    cy.get('body').should('contain.text', 'Sign In');
  });
});
