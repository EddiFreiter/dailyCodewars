// // Fake Binary

// // Given a string of digits, you should replace any digit below 5 with '0' 
// // and any digit 5 and above with '1'. Return the resulting string.

// // Note: input will never be an empty string

// // My Solution
// function fakeBin(x){
//     return String(x).split('').map(num => ((num < 5) ? num = 0 : num =1)).join('');
// }

// // TEST
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests",() =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
//     assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 
//     assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
//   })
// });


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Count of positives / sum of negatives

// // Given an array of integers.

// // Return an array, where the first element is the count of positives
// // numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// // If the input is an empty array or is null, return an empty array.

// // Example
// // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// // My Solution
function countPositivesSumNegatives(input) {
    return ?;
}
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

// // TEST
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Example tests", () => {
//   it("Testing for fixed test 1", () => {
//     let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
//     let actual = countPositivesSumNegatives(testData);
//     let expected = [10, -65];
//     assert.deepEqual(actual, expected);
//   })
    
//   it("Testing for fixed test 1", () => {
//     let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
//     let actual = countPositivesSumNegatives(testData);
//     let expected = [8, -50];    
//     assert.deepEqual(actual, expected);
//   });
// });