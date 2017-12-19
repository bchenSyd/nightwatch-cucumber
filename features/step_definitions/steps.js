import { client } from 'nightwatch-cucumber'
import { defineSupportCode } from 'cucumber'

defineSupportCode(({ Given, Then, When }) => {

  Given(/^I open page "([^"]*)"$/, async (url) => {
    await client.url(`${url}`);
    await client.waitForElementVisible('body', 1000)
  });

  Given(/^I open sub page "([^"]*)"$/, async (subUrl) => {
    await client.url(`${client.launchUrl + subUrl}`);
    await client.waitForElementVisible('body', 1000)
  });

  Then(/^I expect that element "([^"]*)" to be present$/, async (selector) => {
    await client.waitForElementPresent(selector, 6000);
  });

  Then(/^I expect that element "([^"]*)" text should be "([^"]*)"$/, async (selector, expectedText) => {

    debugger;
    await client.expect.element(selector).text.to.equal(expectedText);

    // ********************************************************
    //   undefined; because nightwatch-cucumber is not using 
    //   promise internally; can only use callback pattern
    const result = await client.getText(selector);
    console.log('you should see undefined: ' + result);
    // ********************************************************

    await client.getText(selector, result => {
      const {status, value} = result;
      client.assert.equal(0, status);
      client.assert.equal(value, expectedText);
    })


    await client.element('css selector', selector, result => {
      client.assert.equal(0, result.status);
      console.log(result.value); // :wdc:1513641539817 , see .learn/nightwatch.md
    });

  })

  Then(/^the title is "(.*?)"$/, async (text) => {
    await client.assert.title(text)
  })

  Then(/^the Google search form exists$/, async () => {
    await client.assert.visible('input[name="q"]')
  })

  Then(/^the Yahoo search form exists$/, async () => {
    await client.assert.visible('input[name="p"]')
  })

})