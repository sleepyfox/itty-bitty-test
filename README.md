# itty-bitty-test
A teensy weensy test library for Node.js with a tiny test-runner too.

## Design objectives
1. Very minimal. No run-time dependencies.
2. No checkers, instead use Node.js's built-in assert module, or use something like [should.js](https://github.com/tj/should.js) or [Chai](http://chaijs.com/) if you must.
3. Does *not* corrupt the global namespace. Yes, almost every other testing library, I'm looking at you.

## How to install

    npm install --save-dev itty-bitty-test
    
## Examples of use
Itty-bitty-test exposes three functions to help you write tests:
* suite - acts as a wrapper for tests. Doesn't currently nest
* it - is a test. Has a name and a callback with no parameters (a 'thunk'). Registers the test without actually running it.
* reporter - runs the tests and reports their results

A simple test suite might look like the following (ES5):

```javascript
var t = require("itty-bitty-test");
var assert = require("assert");

t.describe("A calculator", (function() {
  t.it("should be able to add", (function() {
    assert.equal((1 + 3), 4, "two plus two is four");
  }));
  t.it("should be able to multiply", (function() {
    return assert.equal((2 * 3), 6, "two times three is 6");
  }));
}));

t.reporter(console.log);
```

Of which the output looks like this:
```
✔ A calculator - should be able to add
✔ A calculator - should be able to multiply
```

## Hacking on itty-bitty-test

You probably don't want to do this, because it was written in [Sibilant.js](https://sibilant.org/), more as an experiment than anything else. If you really want to raise a PR, please feel free, but don't be surprised of I don't accept it because e.g.

* Isn't written in Sibilant
* You've 'helpfully' translated it to ES3/4/5/6/7/Next/Babel/CoffeeScript/TypeScript/Whatevs
* Doesn't itself have tests, written using itty-bitty-test (obviously)
* Isn't written in idiomatic Lisp (any of them)
* Goes against any of the design principles as stated at the top of this page

As I said above, you probably don't want to do this...

