```javascript

client.expect.element('.version').text.to.equal('(0.9.3)')
// node_modules/nightwatch/lib/api/expect.js line:93
  Element.prototype.getElementsCommand = function(callback) {
      this.locator = this.using || client.locateStrategy || 'css selector';
    return Protocol.elements(this.locator, this.selector, callback);
  };

// node_modules/nightwatch/lib/api/protocal.js line:254
function elements(using, value, callback) {
    var check = /class name|css selector|id|name|link text|partial link text|tag name|xpath/gi;
    if (!check.test(using)) {
      throw new Error('Please provide any of the following using strings as the first parameter: ' +
        'class name, css selector, id, name, link text, partial link text, tag name, or xpath. Given: ' + using);
    }

    return postRequest('/elements', {
      using: using,
      value: value
    }, callback);
  }

// the callback
// node_modules/nightwatch/lib/api/expect/text.js
TextAssertion.prototype.executeCommand = function(callback) {
  // element result is ":wdc:1513641539817"; we now call protocal.elementIdText to get its `text` property;
  this.protocol.elementIdText(this.elementResult.ELEMENT, callback);
};

```
