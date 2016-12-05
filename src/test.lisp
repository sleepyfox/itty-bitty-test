(var OK "\033[32m\u2714\033[0m")
(var FAIL "\033[31m\u2718\033[0m")

(var current-context "")
(var result-list [])

;; [ "SUITE", "A test suite", [...]]
(def describe (name func)
     ;; TODO: this should create a suite list
     (assign current-context name)
     (func)
     (assign current-context ""))

;; [ "RESULT", "my first test", true, null]
;; Runs the test and adds the result to the result-list
(def fixture (name func)
     (var res (try
                (do
                  (func)
                  (make-result name current-context))
                (make-failed-result name current-context e)))
     (.push result-list res))

(def make-result (name context)
     { context: context
       name: name
       passed: true
       message: "" })

(def make-failed-result (name context err) {
     context: context
     name: name
     passed: false
     message: (+ " FAILED: '" err.message
                 "', expected: " err.expected
                 ", got: " err.actual)
     })

(def reporter (printer)
     (each r result-list
           (ternary r.passed
                    (printer OK r.context '- r.name)
                    (printer FAIL r.context '- r.name "\n" r.message))))

(set module 'exports {
     reporter: reporter
     it: fixture
     describe: describe
     context: describe
     _result-list: result-list
     _make-result: make-result
     _make-failed-result: make-failed-result })
