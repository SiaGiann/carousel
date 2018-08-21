var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test carousel': function (browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body')
      .assert.cssProperty('#carousel', 'background-image', 'url("http://localhost:8080/images/soci1.png")')
      .assert.cssClassPresent('#bullet span:first-child', 'color-blue-light')
      .pause(6000)
      .assert.cssProperty('#carousel', 'background-image', 'url("http://localhost:8080/images/soci2.png")')
      .assert.cssClassPresent('#bullet span:first-child', 'color-white')
      .click('#arrow-next')
      .click('#arrow-next')
      .assert.cssProperty('#carousel', 'background-image', 'url("http://localhost:8080/images/soci4.png")')
      .pause(6000)
      .assert.cssProperty('#carousel', 'background-image', 'url("http://localhost:8080/images/soci1.png")')
      .assert.cssClassPresent('#bullet span:first-child', 'color-blue-light')
      .click('#arrow-prev')
      .assert.cssProperty('#carousel', 'background-image', 'url("http://localhost:8080/images/soci4.png")')
      .assert.cssClassPresent('#bullet span:first-child', 'color-white')
      .assert.cssClassPresent('#bullet span:last-child', 'color-blue-light')
      .end();
    }
  };
