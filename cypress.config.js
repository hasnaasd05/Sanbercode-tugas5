const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   baseUrl :'https://kasirdemo.belajarqa.com/login',
   specPattern : "cypress/support/e2e",
   supportFile : false,
   chromeWebSecurity : false,
  },
});
