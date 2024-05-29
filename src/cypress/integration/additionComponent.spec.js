// cypress/integration/additionComponent.spec.js
describe('AdditionComponent', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should add two numbers and display the result', () => {
      cy.get('input[placeholder="Enter first number"]').type('5');
      cy.get('input[placeholder="Enter second number"]').type('3');
      cy.get('button').contains('Add').click();
      cy.get('div').contains('Result: 8').should('exist');
    });
  });
  