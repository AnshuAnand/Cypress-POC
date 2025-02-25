class LoginPage {
    //Locators for Login Page
    loginPageURL = Cypress.config().baseUrl;
    usernameInput = '[data-test="username"]';
    passwordInput = '[data-test="password"]';
    loginButton = '[data-test="login-button"]';
    errorButton = '[data-test="error-button"]';

    //Methods for Login page
    visitLoginPage () {
        cy.visit(this.loginPageURL);
    }

    isLoginButtonVisible() {
        cy.get(this.loginButton).should('be.visible');
    }

    enterUsername (username) {
        cy.get(this.usernameInput).type(username);
    }

    enterPassword (password) {
        cy.get(this.passwordInput).type(password);
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
    }

    isErrorButtonVisible () {
        cy.get(this.errorButton).should('be.visible');
    }

    login(username,password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginButton();
    }

    loginWithInvalidCredentials(username,password) {
        this.login(username,password);
        this.isErrorButtonVisible();
    }
}

// 🏷️ Export the class so it can be imported in tests
export default LoginPage;