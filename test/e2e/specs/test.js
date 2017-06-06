// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.peopleList__title')
      .assert.containsText('.peopleList__title', 'List of people I know');
    // Here, I used my own custom assertion
    const query = '.content ul li a[href]';
    browser.assert.elementCountFn(query, count => count > 0);
    browser.getText(query, (result) => {
      browser
        .click(query)
        .waitForElementVisible('.person__heading .title', 5000)
        .assert.containsText('.person__heading .title', result.value);
    });

    browser.end();
  },
};
