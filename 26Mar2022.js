// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Write a function which calculates the average of the numbers in a given list.

// // Note: Empty arrays should return 0.

// // My Solution
function find_average(array) {
    return array != 0 ? (array.reduce((x,y) => (x+y))/array.length) : 0;
  }

// // TEST
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(find_average([1,1,1]), 1);
//     assert.strictEqual(find_average([1,2,3]), 2);
//     assert.strictEqual(find_average([1,2,3,4]), 2.5);
//   });
// });  
