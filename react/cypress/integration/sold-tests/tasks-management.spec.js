Cypress.Commands.add('setUp', () => {
  cy.get('input').type('Walk Dog{enter}').type('Herd Cats{enter}').type('Water Plants{enter}')
});

describe('Tasks Management', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('checks all todos and has complete class', () => {
    cy.setUp();
    cy.get('input.toggle').click({ multiple: true });
    cy.get('li').should('have.class', 'completed');
  })

  it('toggles complete to remove completed class', () => {
    cy.setUp();
    cy.get('input.toggle').click({ multiple: true }).click({ multiple: true });
    cy.get('li').should('not.have.class', 'completed');
  })

  it('.todo-count has text 2 items left', () => {
    cy.setUp();
    cy.get('input.toggle').first().click();
    cy.get('.todo-count').contains('2 items left');
  })



})
