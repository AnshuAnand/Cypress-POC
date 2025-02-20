describe ('Login page', () => {
    it ('should load the login page', () => {
        cy.visit('http://www.saucedemo.com');
        cy.get('[data-test = "login-button"]').should('be.visible');
    })
})