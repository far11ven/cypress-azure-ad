/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example Azure AD', () => {

  it('displays two todo items by default', () => {
    cy.visit("/");
    cy.get("a#hero-banner-sign-in-to-office-365-link").click();

    cy.origin('https://microsoftonline.com/',()=> {

      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

      cy.get("input[name=email]").click();
      cy.get("input[name=email]").type('test');
  })

})

})
