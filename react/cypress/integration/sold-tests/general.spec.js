describe('General tests', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should hide main and footer', () => {
    cy.get('section.main').should('not.exist');
    cy.get('footer.footer').should('not.exist');
  })

  it('should focus input when page is visited', () => {
    cy.focused().should('have.class', 'new-todo');
  })

  it('should show empty input after submitting todo', () => {
    cy.get('input').type('Walk Dog{enter}');
    cy.get('input').should('be.empty');
  })

  it('main and footer should not be hidden after inputting todo', () => {
    cy.get('input').type('Walk Dog{enter}');
    cy.get('section.main').should('not.be.hidden');
    cy.get('footer.footer').should('not.be.hidden');
  })

  it('todo item should exist after submitting', () => {
    cy.get('input').type('Walk Dog{enter}');
    cy.get('li').should('exist');
  })

  it('3 todo items should exist after submitting 3 todos', () => {
    cy.get('input').type('Walk Dog{enter}').type('Herd Cats{enter}').type('Water Plants{enter}')
    const items = cy.get('ul.todo-list').children();
    items.should('have.length', 3);
  })

  it('should trim leading and trailing white space from todo items', () => {
    cy.get('input').type('   Walk Dog   {enter}');
    cy.get('li').contains('Walk Dog');
  })

})
