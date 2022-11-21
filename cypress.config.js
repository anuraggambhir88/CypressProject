const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());

      on("task", {
        setMyUniqueId: (val) => {
          return (myUniqueId = val);
        },

        getMyUniqueId: () => {
          return myUniqueId;
        },
      });
    },
    env: {
      baseURL: "https://www.lambdatest.com/selenium-playground",
      baseURLEcom: "https://ecommerce-playground.lambdatest.io",
      baseURLBSM: "",
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
  },
});
