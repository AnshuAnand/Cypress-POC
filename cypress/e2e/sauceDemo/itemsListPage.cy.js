import LoginPage from "../../pageObjects/LoginPage";
import loginTestData from "../../fixtures/loginTestData.json";
import ItemsListPage from "../../pageObjects/ItemsListPage";

const loginPage = new LoginPage();
const itemsListPage = new ItemsListPage();

describe("Items list page", () => {
  beforeEach(() => {
    
    loginPage.visitLoginPage();
    loginPage.validateLogin(loginTestData.validUsername[0],loginTestData.validPassword,false);
  });

  it("should load the Items list page", () => {
    itemsListPage.isItemsListVisible();
  });
});
