class LoginPage {
    //Locators for Login Page
    loginPageURL = Cypress.config().baseUrl;
    txtUsername = '[data-test="username"]';
    txtPassword = '[data-test="password"]';
    btnLogin = '[data-test="login-button"]';
    btnError = '[data-test="error-button"]';

    //Methods for Login page
    visitLoginPage () {
        cy.visit(this.loginPageURL);
    }

    isLoginButtonVisible() {
        cy.get(this.btnLogin).should('be.visible');
    }

    enterUsername (username) {
        cy.get(this.txtUsername).type(username);
    }

    enterPassword (password) {
        cy.get(this.txtPassword).type(password);
    }

    clickLoginButton() {
        cy.get(this.btnLogin).click();
    }

    isErrorButtonVisible () {
        cy.get(this.btnError).should('be.visible');
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