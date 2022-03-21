// MakeUpperCase

// Write a function which converts the input string to uppercase.

// My Solution
function makeUpperCase(str) {
    // Code here
    return str.toUpperCase()
  }

// TEST
describe("Basic Tests", function(){
    it("should pass the basic tests", function(){
      Test.assertEquals(makeUpperCase("hello"), "HELLO");
    });
  });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////