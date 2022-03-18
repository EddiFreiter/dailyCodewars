// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Returning Strings

// // Make a function that will return a greeting statement that uses an input;
// // your program should return, "Hello, <name> how are you doing today?".

// // [Make sure you type the exact thing I wrote or the program may not execute properly]

// // My Solution
// function greet(name){
//     return `Hello, ${name} how are you doing today?`;
//   }

// // TEST
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests",() =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
//     assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");
//   })
// })


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Convert number to reversed array of digits

// // Given a random non-negative number, you have to return the
// // digits of this number within an array in reverse order.

// // Example:
// // 348597 => [7,9,5,8,4,3]
// // 0 => [0]

// // My Solution
// function digitize(n) {
//     //code here
//     let arr = Array.from(n.toString()).reverse()
//     let len = arr.length
//     i = 0
//     while(i < len) {
//         arr.push(parseInt(arr[0]))
//         arr.shift(0,1)
//         i += 1
//     }
//     return arr
//   }

// Better Solution
// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//   }

// // Test
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(digitize(35231),[1,3,2,5,3]);
//     assert.deepEqual(digitize(0),[0]);
//   });
// });

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Abbreviate a Two Word Name

// // Write a function to convert a name into initials. This kata strictly
// // takes two words with one space in between them.

// // The output should be two capital letters with a dot separating them.

// // It should look like this:

// // Sam Harris => S.H

// // patrick feeney => P.F

// // My Solution
function abbrevName(name){
    name = name.split(" ")
    name.forEach(element => {
        element.
    });

    return name
}

// // TEST
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(abbrevName("Sam Harris"), "S.H");
//     assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
//     assert.strictEqual(abbrevName("Evan Cole"), "E.C");
//     assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
//     assert.strictEqual(abbrevName("David Mendieta"), "D.M");
//   });
// });