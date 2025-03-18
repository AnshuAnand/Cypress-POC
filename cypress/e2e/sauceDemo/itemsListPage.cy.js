import LoginPage from "../../pageObjects/LoginPage";
import ItemsListPage from "../../pageObjects/ItemsListPage";

const loginPage = new LoginPage();
const itemsListPage = new ItemsListPage();

describe("Items list page", () => {
  let loginTestData;
  before(() => {
    cy.fixture("loginTestData").then((data) => {
      loginTestData = data;
    });
  });
  
  beforeEach(() => {
    loginPage.visitLoginPage();
    loginPage.validateLogin(
      loginTestData.validUsername[0], 
      loginTestData.validPassword, 
      false
    );
    itemsListPage.isItemsListVisible();
  });

  it("should display the items on Items list page", () => {

  });
});
