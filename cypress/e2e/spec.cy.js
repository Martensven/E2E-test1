describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://viktorwahlqvist.github.io/Hackathon-easter/')
    cy.reload()
    cy.get('input').type('Hej')
    cy.get('button').click()
    cy.get('.text-green-400').click()
    cy.get('button').click()
  })
})