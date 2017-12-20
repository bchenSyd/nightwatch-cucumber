import { client } from 'nightwatch-cucumber';
import { defineSupportCode } from 'cucumber';

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect that element "([^"]*)" text should be "([^"]*)"$/, async (selector, expectedText) => {
    await client.expect.element(selector).text.to.equal(expectedText);
  });

  Then(/^I expect that element "([^"]*)" value should be "([^"]*)"$/, async (selector, expectedValue) => {
    await client.expect.element(selector).to.have.value.that.equals(expectedValue);
  });

  Then(/^I expect that element "([^"]*)" tag should be "([^"]*)"$/, async (selector, expectedTagName) => {
    await client.getTagName(selector, result => {
      const { status, value } = result;
      client.assert.equal(status, 0);
      client.assert.equal(value, expectedTagName);
    });
  });

  Then(/^I expect that element "([^"]*)" cssporperty of "([^"]*)" should be "([^"]*)"$/, async (selector, propertyName, propertyVal) => {
    await client.getCssProperty(selector, propertyName, result => {
      const { status, value } = result;
      client.assert.equal(status, 0);
      client.assert.equal(value, propertyVal);
    });
  });

  Then(/^I expect that element "([^"]*)" should be selected$/, async (selector) => {
    await client.expect.element(selector).to.be.selected;
  });

  Then(/^I expect that element "([^"]*)" should( not)* be visible$/, async (selector, invisible) => {
    if (invisible) {
      await client.expect.element(selector).to.not.be.visible;
    } else {
      await client.expect.element(selector).to.be.visible;
    }
  });

  Then(/^I expect that element "([^"]*)" does( not)* exist$/, async (selector, notPresent) => {
    if (notPresent) {
      await client.expect.element(selector).to.not.be.present;
    } else {
      await client.expect.element(selector).to.be.present;
    }
  });

  Then(/^I expect that (element|inputfield) "([^"]*)"( not)* contains the text "([^"]*)"$/,
    async (type, selector, negative, content2Check) => {
      const callback = result => {
        const { status, value } = result;
        client.assert.equal(0, status);
        let contains = false;
        contains = value.lastIndexOf(content2Check) !== -1;

        if (negative) {
          client.assert.equal(contains, false);
        } else {
          client.assert.equal(contains, true);
        }
      };
      if (type === 'inputfield') {
        await client.getValue(selector, callback);
      } else {
        await client.getText(selector, callback);
      }
    });

  Then(/^I expect that the attribute "([^"]*)" of element "([^"]*)" should( not)* be value "([^"]*)"$/,
    async (attributeName, selector, negative, value2Check) => {
      await client.getAttribute(selector, attributeName, result => {
        const { status, value } = result;
        client.assert.equal(0, status);
        if (negative) {
          client.expect(value).to.not.have.string(value2Check);
        } else {
          client.expect(value).to.have.string(value2Check);
        }
      });
    });
});
