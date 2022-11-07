const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseURL: "https://www.lambdatest.com/selenium-playground",
      baseURLEcom: "https://ecommerce-playground.lambdatest.io"
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    }
  },
});
