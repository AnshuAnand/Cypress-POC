class LoginPage {
    //Locators
    loginButton = '[data-test = "login-button"]';
    loginPageURL = 'http://www.saucedemo.com';


    //Methods
    visit () {
        cy.visit(this.loginPageURL);
    }

    isLoginButtonVisible() {
        cy.get(this.loginButton).should('be.visible');
    }
}

// 🏷️ Export the class so it can be imported in tests
export default LoginPage;