var OK = "\033[32m\u2714\033[0m";
var FAIL = "\033[31m\u2718\033[0m";
var currentContext = "";
var testList = [];
var describe = (function describe$(name, func) {
  /* describe src/test.lisp:7:0 */

  currentContext = name;
  func();
  return currentContext = "";
});
var fixture = (function fixture$(name, func) {
  /* fixture src/test.lisp:12:0 */

  return testList = testList.concat([ {
    name: name,
    func: func,
    context: currentContext
  } ]);
});
var makeResult = (function makeResult$(test) {
  /* make-result src/test.lisp:18:0 */

  return {
    context: test.context,
    name: test.name,
    passed: true,
    message: ""
  };
});
var makeFailedResult = (function makeFailedResult$(test, err) {
  /* make-failed-result src/test.lisp:24:0 */

  return {
    context: test.context,
    name: test.name,
    passed: false,
    message: (" FAILED: '" + err.message + "', expected: " + err.expected + ", got: " + err.actual)
  };
});
var runTests = (function runTests$(tests) {
  /* run-tests src/test.lisp:33:0 */

  return tests.map((function(t) {
    /* src/test.lisp:34:16 */
  
    return (function() {
      try {
        t.func();
        return makeResult(t);
      } catch (e) {
        return makeFailedResult(t, e);
      }
    }).call(this);
  }));
});
var reportResults = (function reportResults$(results) {
  /* report-results src/test.lisp:40:0 */

  return results.forEach((function(r) {
    /* src/test.lisp:41:5 */
  
    return (r.passed) ? console.log(OK, r.context, "-", r.name) : console.log(FAIL, r.context, "-", r.name, "\n", r.message);
  }));
});
var reporter = (function reporter$() {
  /* reporter src/test.lisp:46:0 */

  return reportResults(runTests(testList));
});
module.exports = {
  reporter: reporter,
  it: fixture,
  describe: describe,
  context: describe
};