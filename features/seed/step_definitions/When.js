import { client } from 'nightwatch-cucumber';
import { defineSupportCode } from 'cucumber';

defineSupportCode(({ Given, Then, When }) => {
  When(/^I click on the element "([^"]*)"$/, (selector) => {
    client.click(selector);
  });

  When(/^I click on "([^"]*)" in the element "([^"]*)"$/, (click_selector, element_selector) => {
    client.click(click_selector);
  });

  When(/^I set "([^"]*)" to the element "([^"]*)"$/, (value, selector) => {
    client.setValue(selector, value);
  });

  When(/^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)"$/, (index, selector) => {
    client.click(selector + ` option[$index]`);
  });

  When(/^I wait on element "([^"]*)"( for (\d+)ms)*( to (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/,
    (selector, obsolete, waitTime=6000) => {
      client.waitForElementVisible(selector, waitTime);
    });
});

