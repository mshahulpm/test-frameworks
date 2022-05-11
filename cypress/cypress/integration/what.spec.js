
it('go to whatsapp and send messages', () => {
    cy.visit('https://web.whatsapp.com/', {
        failOnStatusCode: false
    })
})