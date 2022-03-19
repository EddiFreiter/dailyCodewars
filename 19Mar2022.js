/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// You Can't Code Under Pressure #1

// Code as fast as you can! You need to double the integer and return it.

// My Solution
function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
  }

// TEST
describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(doubleInteger(2), 4);
    });
  });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Jenny's secret message

// Jenny has written a function that returns a greeting for a user. 
// However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

// My Solution
function greet(name){
    if(name === "Johnny")
      return "Hello, my love!";
    
    return "Hello, " + name + "!";
  }

// TEST
describe("Jenny's greeting function", function(){
    it("should greet some people normally",function(){
      Test.assertEquals(greet("Jim"), "Hello, Jim!");
      Test.assertEquals(greet("Jane"), "Hello, Jane!");
      Test.assertEquals(greet("Simon"), "Hello, Simon!");
    });
    it("should greet Johnny a little bit more special",function(){
      Test.assertEquals(greet("Johnny"), "Hello, my love!");
    });
  });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Invert values
// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// My Solution
function invert(array) {
    return array.map(num => -num);
 }

// TEST
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Invert array values",() => {
  it("Basic Tests", () => {
    assert.deepEqual(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
    assert.deepEqual(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
    assert.deepEqual(invert([]), []);
    assert.deepEqual(invert([0]), [-0]);
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 