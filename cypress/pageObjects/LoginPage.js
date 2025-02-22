class LoginPage {
    //Locators for Login Page
    loginPageURL = 'https://www.saucedemo.com';
    usernameInput = '[data-test="username"]';
    passwordInput = '[data-test="password"]';
    loginButton = '[data-test="login-button"]';

    //Locators for Items page
    itemsPageURL = "https://www.saucedemo.com/inventory.html";
    inventoryList = ".inventory_list";



    //Methods
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
}

// 🏷️ Export the class so it can be imported in tests
export default LoginPage;