import LoginPage from "../../pageObjects/LoginPage";
import loginTestData from '../../fixtures/loginTestData.json';

const loginPage = new LoginPage();

describe("Login page", () => {
  beforeEach(() => {
    loginPage.visitLoginPage();
    })
  
  it("should load the login page", () => {
    loginPage.isLoginButtonVisible();
  });

  it("should login with valid credentials", () => {
    const username = loginTestData.validUsername;
    const password = loginTestData.validPassword;
    loginPage.login(username,password);
    cy.url().should('eq',loginPage.itemsPageURL);
    cy.get(loginPage.inventoryList).should('be.visible');
  });

  it("should not login with invalid username", () => {
    const username = loginTestData.invalidUsername;
    const password = loginTestData.validPassword;
    loginPage.loginWithInvalidCredentials(username,password);
  });

  it("should not login with invalid password", () => {
    const username = loginTestData.validUsername;
    const password = loginTestData.invalidPassword;
    loginPage.loginWithInvalidCredentials(username,password);
  })

  it("should not login with invalid username and password", () => {
    const username = loginTestData.invalidUsername;
    const password = loginTestData.invalidPassword;
    loginPage.loginWithInvalidCredentials(username,password);
  })
  
});
