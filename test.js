module.exports = {
  'Test': function (browser) {
    browser
      .url('https://www.lullabot.com/');
    browser.initAccessibility();
    browser.assert.accessibility('body', {
        verbose: true
      })
      .end()
  }
}
