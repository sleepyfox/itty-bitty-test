(var t (require "./test"))
(var assert (require "assert"))

(t.describe "A calculator"
   (#> (t.it "should be able to add"
          (#> (assert.equal (+ 1 3) 4 "two plus two is four")))
       (t.it "should be able to multiply"
          (#> (assert.equal (* 2 3) 6 "two times three is 6")))))

(t.context "when dividing"
   (#> (t.it "should divide positive numbers"
          (#> (assert.equal (/ 4 2) 2
                            "two divided by two is two")
              (assert.equal (/ 7 4) 1.75
                            "seven divided by four is one and three-quarters")))
       (t.it "should divide negative numbers"
          (#> (assert.equal (/ -4 -2) 2
                            "minus four divided by minus two is two")))))

(t.reporter console.log)
