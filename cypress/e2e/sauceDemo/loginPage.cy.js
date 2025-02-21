import LoginPage from "../../pageObjects/LoginPage";

const loginPage = new (LoginPage);

describe('Login page', () => {
    it ('should load the login page', () => {
        loginPage.visit();
        loginPage.isLoginButtonVisible();
    })
})