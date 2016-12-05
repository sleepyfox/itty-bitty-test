var OK = "\033[32m\u2714\033[0m";
var FAIL = "\033[31m\u2718\033[0m";
var currentContext = "";
var resultList = [];
var describe = (function describe$(name, func) {
  /* describe src/test.lisp:8:0 */

  currentContext = name;
  func();
  return currentContext = "";
});
var fixture = (function fixture$(name, func) {
  /* fixture src/test.lisp:16:0 */

  var res = (function() {
    try {
      func();
      return makeResult(name, currentContext);
    } catch (e) {
      return makeFailedResult(name, currentContext, e);
    }
  }).call(this);
  return resultList.push(res);
});
var makeResult = (function makeResult$(name, context) {
  /* make-result src/test.lisp:24:0 */

  return {
    context: context,
    name: name,
    passed: true,
    message: ""
  };
});
var makeFailedResult = (function makeFailedResult$(name, context, err) {
  /* make-failed-result src/test.lisp:30:0 */

  return {
    context: context,
    name: name,
    passed: false,
    message: (" FAILED: '" + err.message + "', expected: " + err.expected + ", got: " + err.actual)
  };
});
var reporter = (function reporter$(printer) {
  /* reporter src/test.lisp:39:0 */

  return resultList.forEach((function(r) {
    /* src/test.lisp:40:5 */
  
    return (r.passed) ? printer(OK, r.context, "-", r.name) : printer(FAIL, r.context, "-", r.name, "\n", r.message);
  }));
});
module.exports = {
  reporter: reporter,
  it: fixture,
  describe: describe,
  context: describe,
  _resultList: resultList,
  _makeResult: makeResult,
  _makeFailedResult: makeFailedResult
};