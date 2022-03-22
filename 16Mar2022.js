// Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// Solution
function positiveSum(arr) {
    sum = 0
    for ( let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            sum += arr[i]
        }
    }
    return sum
}

// Alternative solution (compact)
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }

// Test
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([1,2,3,4,5]),15);
    assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
    assert.strictEqual(positiveSum([]),0);
    assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
    assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
    });
  });

// Return negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// My Solution
function makeNegative(num) {
    // Code?
  if (num <= 0){
    return num
  }else{
    return -num
  }
}

  // Test
  describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(makeNegative(42), -42);
    });
  });


// Powers of 2
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
    num = []
    for (i = 0; i <= n; i++){
        num.push(Math.pow(2,i))
    }
    return num
  }

// Test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", function(){
  it("Testing for fixed tests", () => {
    assert.deepEqual(powersOfTwo(0), [1])
    assert.deepEqual(powersOfTwo(1), [1, 2])
    assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16])
  })
});