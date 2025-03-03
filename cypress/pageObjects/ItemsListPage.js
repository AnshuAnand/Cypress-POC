class ItemsListPage {
  //Locators for Items page
  itemsListPageURL = Cypress.config().itemsListPageURL;
  inventoryList = ".inventory_list";

  //Methods
  visitItemsListPage() {
    cy.visit(this.itemsListPageURL);
  }

  isItemsListVisible() {
    cy.get(this.inventoryList).should('be.visible');
  }

}

export default ItemsListPage;
