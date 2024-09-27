const {defineConfig} = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) { 
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  // webpack config goes here if required
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
});