import LoginPage from "../../pageObjects/LoginPage";
import ItemsListPage from "../../pageObjects/ItemsListPage";

const loginPage = new LoginPage();
const itemsListPage = new ItemsListPage();

describe("Items list page", () => {
  let loginTestData;
  beforeEach(() => {
    cy.fixture("loginTestData").then((data) => {
      loginTestData = data;
    });
  });

  it("should load the Items list page", () => {
    loginPage.visitLoginPage();
    loginPage.validateLogin(loginTestData.validUsername[0],loginTestData.validPassword,false);
    itemsListPage.isItemsListVisible();
  });
});
