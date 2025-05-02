describe('', () => {
  it('passes', () => {
    cy.visit('https://martensven.github.io/E2E-test1/')
    cy.reload()
    cy.get('input').type('Hej')
    cy.get('button').click()
    cy.get('.text-green-400').click()
    cy.get('.removeTodo').click()
  })
})