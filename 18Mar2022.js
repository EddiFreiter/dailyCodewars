/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Returning Strings

// Make a function that will return a greeting statement that uses an input;
// your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

// My Solution
function greet(name){
    return `Hello, ${name} how are you doing today?`;
  }

// TEST
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
    assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");
  })
})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the
// digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// My Solution
function digitize(n) {
    //code here
    let arr = Array.from(n.toString()).reverse()
    let len = arr.length
    i = 0
    while(i < len) {
        arr.push(parseInt(arr[0]))
        arr.shift(0,1)
        i += 1
    }
    return arr
  }

Better Solution
function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }

// Test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(digitize(35231),[1,3,2,5,3]);
    assert.deepEqual(digitize(0),[0]);
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly
// takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// My Solution
function abbrevName(name){
    name = name.split(" ")
    let FirstName = name[0].slice(0,1).toUpperCase()
    let LastName = name[1].slice(0,1).toUpperCase()

    return FirstName+"."+LastName
}

Better Solution
function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
  }
// TEST
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(abbrevName("Sam Harris"), "S.H");
    assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
    assert.strictEqual(abbrevName("Evan Cole"), "E.C");
    assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
    assert.strictEqual(abbrevName("David Mendieta"), "D.M");
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// A Needle in the Haystack

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

// My Solution
function findNeedle(haystack) {
    // your code here
  }

// TEST
describe("Tests", () => {
    it("test", () => {
  var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
  var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
  var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];
  
  Test.assertNotEquals(findNeedle(haystack_1), undefined, "Your function didn't return anything");
  Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
  Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
  Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')
    });
  });