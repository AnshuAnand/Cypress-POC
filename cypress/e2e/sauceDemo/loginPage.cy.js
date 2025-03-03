import LoginPage from "../../pageObjects/LoginPage";
import loginTestData from "../../fixtures/loginTestData.json";

const loginPage = new LoginPage();

describe("Login page", () => {
  beforeEach(() => {
    loginPage.visitLoginPage();
  });

  it("should load the login page", () => {
    loginPage.isLoginButtonVisible();
  });

  loginTestData.validUsername.forEach((username) => {
    it(`should login with valid username: "${username}" and password`, () => {
      const password = loginTestData.validPassword;
      loginPage.validateLogin(username, password, false);
    });
  });

  it("should not login with invalid username and password", () => {
    const username = loginTestData.invalidUsername;
    const password = loginTestData.invalidPassword;
    const errorMessage = "Epic sadface: Username and password do not match any user in this service";
    loginPage.validateLogin(username, password, true, errorMessage);
  });

  it("should show error for a locked_out user",() => {
    const username = loginTestData.lockedOutUser;
    const password = loginTestData.validPassword;
    const lockedOutErrorMessage = "Epic sadface: Sorry, this user has been locked out.";
    loginPage.validateLogin(username,password,true, lockedOutErrorMessage);
  })
});
