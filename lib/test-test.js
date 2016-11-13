var t = require("./test");
var assert = require("assert");
t.describe("A calculator", (function() {
  /* src/test-test.lisp:5:3 */

  t.it("should be able to add", (function() {
    /* src/test-test.lisp:6:10 */
  
    return assert.equal((1 + 3), 4, "two plus two is four");
  }));
  return t.it("should be able to multiply", (function() {
    /* src/test-test.lisp:8:10 */
  
    return assert.equal((2 * 3), 6, "two times three is 6");
  }));
}));
t.context("when dividing", (function() {
  /* src/test-test.lisp:11:3 */

  t.it("should divide positive numbers", (function() {
    /* src/test-test.lisp:12:10 */
  
    assert.equal((4 / 2), 2, "two divided by two is two");
    return assert.equal((7 / 4), 1.75, "seven divided by four is one and three-quarters");
  }));
  return t.it("should divide negative numbers", (function() {
    /* src/test-test.lisp:17:10 */
  
    return assert.equal((-4 / -2), 2, "minus four divided by minus two is two");
  }));
}));
t.reporter(console.log);