/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://everecon-frontend.vercel.app');
    // cy.visit('http://localhost:9000');
    cy.get('#username').type('evereconadmin');
    cy.get('#password').type('Test@1011');

    cy.get('#login-button').click();
  });

  it('header-logo', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get('#header img').should('have.attr', 'alt', 'EveRecon').click();
    cy.get('body').should('contain.text', 'ABOUT US');
  });

  it('header-about', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get('#header li').eq(0).click();
    cy.get('body').should('contain.text', 'ABOUT US');
  });

  it('header-explore', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get('#header li').eq(1).click();
    cy.get('#header .dropdown a').eq(0).should('contain.text', 'Events');
    cy.get('#header .dropdown a').eq(1).should('contain.text', 'Communities');
  });

  it('header-explore-events', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get('#header li').eq(1).click();
    cy.get('#header .dropdown a')
      .eq(0)
      .should('contain.text', 'Events')
      .click();
    cy.get('body').should('include.text', 'Explore Events');
    cy.get('.event_card img');
  });

  it('header-explore-community', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get('#header li').eq(1).click();
    cy.get('#header .dropdown a')
      .eq(1)
      .should('contain.text', 'Communities')
      .click();
    cy.get('body').should('include.text', 'Explore Communities');
    cy.get('.community_card img');
  });

  it('header-settings', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get(
      '#header > ul.flex.flex-row.justify-center > li.my-2.m-7 > a'
    ).click();
    cy.get('body').should('contain.text', 'Settings');
  });

  it('header-profile', () => {
    cy.get('body').should('contain.text', 'ABOUT US');
    cy.get(
      '#header > ul.flex.flex-row.justify-center > li:nth-child(2) > a'
    ).click();
    cy.get('body').should('contain.text', 'Following');
  });
});
