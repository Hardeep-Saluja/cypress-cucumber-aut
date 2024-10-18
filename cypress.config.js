const {defineConfig} = require("cypress");
const createBundler = require("@bahmutov/cyress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) { 
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ecommerce-playground.lambdatest.io",
    specPattern: "**/*.feature",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents,
  },
});