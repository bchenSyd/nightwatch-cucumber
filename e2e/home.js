module.exports = {
    'Google Home': function DocsHome(browser) {
      browser
        .url('http://google.com')
        .waitForElementVisible('input[name="q"]', 600)
        .end();
    },
  };
  