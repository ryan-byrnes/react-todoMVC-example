Cypress.Commands.add('setUp', () => {
  cy.get('input').type('Walk Dog{enter}').type('Herd Cats{enter}').type('Water Plants{enter}')
});

describe('Tasks Management', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // it('checks all todos and has complete class', () => {
  //   cy.setUp();
  //   cy.get('input.toggle').click({ multiple: true });
  //   cy.get('li').should('have.class', 'completed');
  // })

  // it('toggles complete to remove completed class', () => {
  //   cy.setUp();
  //   cy.get('input.toggle').click({ multiple: true }).click({ multiple: true });
  //   cy.get('li').should('not.have.class', 'completed');
  // })

  // it('.todo-count has text 2 items left', () => {
  //   cy.setUp();
  //   cy.get('input.toggle').first().click();
  //   cy.get('.todo-count').contains('2 items left');
  // })

  // it('Clear Completed is available after a todo is completed', () => {
  //   cy.setUp();
  //   cy.get('input.toggle').first().click();
  //   cy.get('button.clear-completed').should('be.visible');
  // })

  // it('completed todo no longer exists after clicking Clear Completed', () => {
  //   cy.setUp();
  //   const firstInput = cy.get('input.toggle').first();
  //   firstInput.click();
  //   cy.get('button.clear-completed').click();
  //   firstInput.should('not.exist');
  // })

  // it('controls hidden when editing', () => {
  //   cy.setUp();
  //   cy.get('li').first().dblclick();
  //   cy.get('li.editing > input.toggle').should('not.exist');
  //   cy.get('button.destroy').should('not.be.visible');

  // })

  it('highlight currently applied filter', () => {

  })



})
