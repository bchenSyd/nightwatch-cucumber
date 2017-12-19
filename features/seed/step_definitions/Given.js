import { client } from 'nightwatch-cucumber';
import { defineSupportCode } from 'cucumber';

defineSupportCode(({ Given, Then, When }) => {
  Given(/^I open the url "([^"]*)"$/, async (url) => {
    await client.url(`${client.launchUrl + url }`);
  });
});
