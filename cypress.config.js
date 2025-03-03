const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://www.saucedemo.com/",
    itemsListPageURL : "https://www.saucedemo.com/inventory.html",
    browser: "chrome",
  },
}); 
