import LoginPage from "../../pageObjects/LoginPage";
import loginTestData from '../../fixtures/loginTestData.json';
import InventoryPage from "../../pageObjects/InventoryPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe("Login page", () => {
  beforeEach(() => {
    loginPage.visitLoginPage();
    })
  
  it("should load the login page", () => {
    loginPage.isLoginButtonVisible();
  });

  it.only("should login with valid credentials", () => {
    const username = loginTestData.validUsername;
    const password = loginTestData.validPassword;
    loginPage.login(username,password);
    cy.url().should('eq',inventoryPage.itemsPageURL);
    cy.get(inventoryPage.inventoryList).should('be.visible');
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
