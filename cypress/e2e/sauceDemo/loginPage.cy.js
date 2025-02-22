import LoginPage from "../../pageObjects/LoginPage";

const loginPage = new LoginPage();

describe("Login page", () => {
  beforeEach(() => {
    loginPage.visitLoginPage();
  });
  
  it("should load the login page", () => {
    loginPage.isLoginButtonVisible();
  });

  it("should login with valid credentials", () => {
    const username = "standard_user";
    const password = "secret_sauce";
    loginPage.login(username,password);
    cy.url().should('eq',loginPage.itemsPageURL);
    cy.get(loginPage.inventoryList).should('be.visible');
  });
});
