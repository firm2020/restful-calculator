describe('buttons test', () => {
  it('passes', () => {
  cy.visit('http://localhost:4200')
  cy.get('button').contains('1').click()
  cy.get('button').contains('+').click()
  cy.get('button').contains('1').click()
  cy.get('[data-testid="displayValue"]').should('have.value', '1+1')
  })
})
