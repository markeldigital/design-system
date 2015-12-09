var path = require('path');

var navigateToTestMenuPage = function(test){
  var testHtml = path.join(__dirname, 'menu.test.html');
  return test.open('file://' + testHtml)
};

var skipTestsForChrome = function(test){
    if (test.driver.sessionStatus.browserName === 'chrome'){
        console.log('Closing tabs on focus out is broken on Chrome at the moment');
        test.done();
        return true;
    }

    return false;
};

module.exports = {
  'Navigates to link in submenu': function (test) {
        navigateToTestMenuPage(test)
        .click('.ds-menu-trigger')
        .click('#google')
        .assert.url('https://www.google.co.uk/')
        .done();
    },

    'Trigger toggles submenu': function(test) {
        navigateToTestMenuPage(test)
        .click('.ds-menu-trigger')
        .assert.visible('.ds-menu-items')
        .click('.ds-menu-trigger')
        .assert.notVisible('.ds-menu-items')
        .done();
    },

    'Opens submenus when gets focus': function(test) {
        navigateToTestMenuPage(test)
        .sendKeys('body', '\u0009')
        .assert.visible('.ds-menu-items')
        .done();
    },

    'Closes submenus when clicked away': function(test) {
        var skip = skipTestsForChrome(test);
        if (skip) {
            return;
        }

        navigateToTestMenuPage(test)
        .click('.ds-menu-trigger')
        .click('#away')
        .assert.notVisible('.ds-menu-items')
        .done();
    },

    'Closes submenus when tabbed away': function(test) {
        var skip = skipTestsForChrome(test);
        if (skip) {
            return;
        }

        navigateToTestMenuPage(test)
        .click('.ds-menu-trigger')
        .sendKeys('.ds-menu-trigger', '\u0009')
        .assert.notVisible('.ds-menu-items')
        .done();
    },
};