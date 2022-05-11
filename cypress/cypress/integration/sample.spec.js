
it('it visit  panel and login', () => {

    cy.visit('http://localhost:3000/en/login')

    cy.get('input[name="email"]').type('shahul.floges@gmail.com')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/en/dashboard')

})