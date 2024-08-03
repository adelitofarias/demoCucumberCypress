const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({

  e2e: {
    async setupNodeEvents(on, config) {

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },

    specPattern: [
      "cypress/e2e/features/massas/admin/gerarMassasAdmin.feature",
      "cypress/e2e/features/**/*.feature"
    ],

    chromeWebSecurity: false,

    experimentalRunAllSpecs: true,

    videoCompression: false,

    defaultCommandTimeout: 10000,

    requestTimeout: 10000,

    responsetimeout: 10000,


    env: {
      requestMode: true
    },
  }

});