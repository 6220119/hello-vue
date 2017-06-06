// A custom Nightwatch assertion.
// the name of the method is the filename.
// can be used in tests like this:
//
//   browser.assert.elementCountFn(selector, countFn)
//
// for how to write custom assertions see
// http://nightwatchjs.org/guide#writing-custom-assertions
exports.assertion = function (selector, countFn) {
  this.message = 'Testing if element <' + selector + '> has count as expected by a custom function ';
  // We will pass a function to return boolean value based on a
  // given number of elements returned from a selector.
  this.expected = countFn;
  this.pass = function (val) {
    return this.expected(val);
  };
  this.value = function (res) {
    return res.value;
  };
  this.command = function (cb) {
    return this.api.execute(
      selectorArg => document.querySelectorAll(selectorArg).length,
      [selector],
      (res) => {
        cb.call(this, res);
      });
  };
};
