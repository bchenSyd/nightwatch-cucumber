import { client } from 'nightwatch-cucumber'
import { defineSupportCode } from 'cucumber'

defineSupportCode(({ Given, Then, When }) => {

  Given(/^I open nightwatchjs home page$/, async () => {
    await client.url('http://nightwatchjs.org/')
    await client.waitForElementVisible('body', 1000)
  })

  Then(/^I expect that element "([^"]*)" to be present$/, async (selector)=>{
    await client.waitForElementPresent(selector,6000);
  });

  Then(/^I expect that element "([^"]*)" text should be "([^"]*)"$/, async (selector, expectedText) => {

    debugger;
    await client.expect.element('.version').text.to.equal('(v0.9.19)');
    
    // ********************************************************
    //   undefined; because nightwatch-cucumber is not using 
    //   promise internally; can only use callback pattern
    const result = await client.getText('.version');
    console.log(result);
    // ********************************************************
    
    await client.getText('.version', result => {
      client.assert.equal(0, result.status);
      console.log(result.value)
    })


    await client.element('css selector', '.version', result => {
       client.assert.equal(0, result.status);
       client.click('.version');
    });

  })

  

  Given(/^I open Google`s search page$/, async () => {
    await client.url('http://google.com')
    await client.waitForElementVisible('body', 1000)
  })

  Then(/^the title is "(.*?)"$/, async (text) => {
    await client.assert.title(text)
  })

  Then(/^the Google search form exists$/, async () => {
    await client.assert.visible('input[name="q"]')
  })

  Given(/^I open Yahoo`s search page$/, async () => {
    await client.url('http://yahoo.com')
    await client.waitForElementVisible('body', 1000)
  })

  Then(/^the Yahoo search form exists$/, async () => {
    await client.assert.visible('input[name="p"]')
  })

})