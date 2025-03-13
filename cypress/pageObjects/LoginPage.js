import ItemsListPage from "./ItemsListPage";
const itemsListPage = new ItemsListPage();

class LoginPage {
  //Methods for Login page

  validateLogin(username, password, shouldError = false, errorMessage) {
    this.login(username, password);
    if (shouldError) {
      if (!errorMessage) {
        throw new Error(
          "Error message should be provided when shouldError is true"
        );
      }
      this.isErrorButtonVisible(errorMessage);
    } else {
      cy.url().should("eq", itemsListPage.itemsListPageURL);
      cy.get(itemsListPage.inventoryList).should("be.visible");
    }
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLoginButton();
  }

  enterUsername(username) {
    cy.get(this.txtUsername).type(username);
  }

  enterPassword(password) {
    cy.get(this.txtPassword).type(password);
  }

  clickLoginButton() {
    cy.get(this.btnLogin).click();
  }

  isErrorButtonVisible(errorMessage = null) {
    cy.get(this.btnError).should("be.visible");
    if (errorMessage) {
      cy.get(this.btnError).should("contain.text", errorMessage);
    }
  }

  visitLoginPage() {
    cy.visit(this.loginPageURL);
  }

  isLoginButtonVisible() {
    cy.get(this.btnLogin).should("be.visible");
  }

  //Locators for Login Page
  loginPageURL = Cypress.config().baseUrl;
  txtUsername = '[data-test="username"]';
  txtPassword = '[data-test="password"]';
  btnLogin = '[data-test="login-button"]';
  btnError = '[data-test="error"]';
}

// 🏷️ Export the class so it can be imported in tests
export default LoginPage;
