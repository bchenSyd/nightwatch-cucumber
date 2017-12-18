import { client } from 'nightwatch-cucumber'
import { defineSupportCode } from 'cucumber'

defineSupportCode(({ Given, Then, When }) => {
  Given(/^I open Google`s search page$/, async () => {
    await client.url('http://nightwatchjs.org/')
    await client.waitForElementVisible('body', 1000)
  })


  Then(/^I expect that element "([^"]*)" text should be "([^"]*)"$/, async (selector, expectedText) => {

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

})