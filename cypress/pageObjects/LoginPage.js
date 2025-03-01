import InventoryPage from "./InventoryPage";
const inventoryPage = new InventoryPage();
class LoginPage {
    //Locators for Login Page
    loginPageURL = Cypress.config().baseUrl;
    txtUsername = '[data-test="username"]';
    txtPassword = '[data-test="password"]';
    btnLogin = '[data-test="login-button"]';
    btnError = '[data-test="error"]';

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

    isErrorButtonVisible (errorMessage = null) {
        cy.get(this.btnError).should('be.visible');
        if (errorMessage) {
            cy.get(this.btnError).should('contain.text', errorMessage);
        }
    }

    login(username,password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginButton();
    }

    validateLogin(username,password,shouldError = false, errorMessage) {
        this.login(username,password);
        if(shouldError) {
            this.isErrorButtonVisible(errorMessage);
        } else {
            cy.url().should('eq',inventoryPage.itemsPageURL);
            cy.get(inventoryPage.inventoryList).should('be.visible');
        }
    }
}

// 🏷️ Export the class so it can be imported in tests
export default LoginPage;