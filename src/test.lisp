(var OK "\033[32m\u2714\033[0m")
(var FAIL "\033[31m\u2718\033[0m")

(var current-context "")
(var test-list [])

(def describe (name func)
     (assign current-context name)
     (func)
     (assign current-context ""))

(def fixture (name func)
     (assign test-list (append test-list {
                               name: name
                               func: func
                               context: current-context })))

(def make-result (test)
     { context: test.context
       name: test.name
       passed: true
       message: "" })

(def make-failed-result (test err) {
     context: test.context
     name: test.name
     passed: false
     message: (+ " FAILED: '" err.message
                 "', expected: " err.expected
                 ", got: " err.actual)
     })

(def run-tests (tests)
     (tests.map (# (t)
                   (try (do
                          (t.func)
                          (make-result t))
                        (make-failed-result t e)))))

(def report-results (results)
     (each r results
           (ternary r.passed
                    (console.log OK r.context '- r.name)
                    (console.log FAIL r.context '- r.name "\n" r.message))))

(def reporter ()
     (report-results (run-tests test-list)))

(set module 'exports {
     reporter: reporter
     it: fixture
     describe: describe
     context: describe })
