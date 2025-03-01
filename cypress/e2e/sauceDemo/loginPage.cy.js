import LoginPage from "../../pageObjects/LoginPage";
import loginTestData from "../../fixtures/loginTestData.json";
import InventoryPage from "../../pageObjects/InventoryPage";

const loginPage = new LoginPage();
//const inventoryPage = new InventoryPage();

describe("Login page", () => {
  beforeEach(() => {
    loginPage.visitLoginPage();
  });

  it("should load the login page", () => {
    loginPage.isLoginButtonVisible();
  });

  loginTestData.validUsername.forEach((username) => {
    it(`should login with valid username: "${username}" and password`, () => {
      //const password = loginTestData.validPassword.password;
      const password = loginTestData.validPassword;
      loginPage.validateLogin(username, password, false);
    });
  });

  it("should not login with invalid username and password", () => {
    const username = loginTestData.invalidUsername;
    const password = loginTestData.invalidPassword;
    loginPage.validateLogin(username, password, true);
  });

  it.only("should show error for a locked_out user",() => {
    const username = loginTestData.lockedOutUser;
    const password = loginTestData.invalidPassword;
    loginPage.validateLogin(username,password,true);
  })
});
