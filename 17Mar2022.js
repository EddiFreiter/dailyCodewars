// Volume of a Cuboid

// Bob needs a fast way to calculate the volume of a cuboid with three values: length, 
// width and the height of the cuboid. Write a function to help Bob with this calculation.

// My Solution
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      // your code here
      return length*width*height
    }
  }


// TEST
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(Kata.getVolumeOfCuboid(1,2,2), 4);
    Test.assertEquals(Kata.getVolumeOfCuboid(6.3,2,5), 63);
      });
    });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Opposites Attract
// Timmy & Sarah think they are in love, but around where they live,
// they will only know once they pick a flower each. If one of the flowers has an even number
// of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and
// return true if they are in love and false if they aren't.

// My Solution
function lovefunc(flower1, flower2){
    // moment of truth
    function even(flwr){
        if (flwr % 2 == 0){
            return true
        }else{
            return false
        }
    }

    Timmy = even(flower1)
    Sarah = even(flower2)
    
    if ((Timmy === false && Sarah === true) || (Timmy === true && Sarah === false)){
        return true
    }else{
        return false
    }
  }
// Much more elegant solution:
// function lovefunc(flower1, flower2){
//      return flower1 % 2 !== flower2 % 2;
//  }
  
// TEST
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(lovefunc(1,4), true)
    assert.strictEqual(lovefunc(2,2), false)
    assert.strictEqual(lovefunc(0,1), true)
    assert.strictEqual(lovefunc(0,0), false)
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// USD => CNY
// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

// Examples (Input -> Output)
// * 15  -> '101.25 Chinese Yuan'
// * 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. 
// All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

// My Solution
function usdcny(usd) {
  return (usd*6.75).toFixed(2) + " Chinese Yuan"
}

// TEST
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(usdcny(15), '101.25 Chinese Yuan');
    assert.strictEqual(usdcny(465), '3138.75 Chinese Yuan');
  });
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Pillars
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same.
// Your function accepts three arguments:

// number of pillars (??? 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

// My Solution
function pillars(num_pill, dist, width) {
    // your code here
    return ((((width+(dist*100))*(num_pill-1))-width) > 0) ? (((width+(dist*100))*(num_pill-1))-width) : 0;
  }

// Better solution:
// function pillars(num_pill, dist, width) {
//     // your code here
//     return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
//   }

// TEST
describe("Basic tests", function(){
    it("Testing for number of pillars: 1, distance: 10 m and width: 10 cm", function(){
      Test.assertEquals(pillars(1, 10, 10) , 0);
    });  
    it("Testing for number of pillars: 2, distance: 20 m and width: 25 cm", function(){
      Test.assertEquals(pillars(2, 20, 25) , 2000);
    });
    it("Testing for number of pillars: 11, distance: 15 m and width: 30 cm", function(){
      Test.assertEquals(pillars(11, 15, 30) , 15270);
    });
  });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// String repeat
// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// My Solution
function repeatStr (n, s) {
    newString = ''
    for (let i = 0; i < n; i++){
        newString += s
    }
    return newString;
  }

// TEST
describe("Tests", function() {
    it ("Basic tests", function() {
      Test.assertSimilar(repeatStr(3, "*"), "***");
      Test.assertSimilar(repeatStr(5, "#"), "#####");
      Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
    });
  });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that 
// removes the first and last characters of a string.
// You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

// My Solution
function removeChar(str){
    //You got this!
    arr = str.split('')
    arr.splice(str.length-1,1)
    arr.splice(0,1)
    str = arr.join("")
    return str
   };

// TEST
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(removeChar('eloquent'), 'loquen');
    assert.strictEqual(removeChar('country'), 'ountr');
    assert.strictEqual(removeChar('person'), 'erso');
    assert.strictEqual(removeChar('place'), 'lac');
    assert.strictEqual(removeChar('ooopsss'), 'oopss');
  });
});
 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// My Solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let max = Number.MAX_SAFE_INTEGER
      for (let i = 0; i < args.length; i++){
        if (args[i] < max){
            max = args[i]
        }
      }
      return max
    }
  }

// Better solution
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }

// TEST
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Smallest Integer Tests", () => {
  let sif = new SmallestIntegerFinder();
  it("Fixed Tests", () => {
    assert.strictEqual(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
    assert.strictEqual(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
    assert.strictEqual(sif.findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
    assert.strictEqual(sif.findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
    assert.strictEqual(sif.findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');
  });
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Grasshopper - Summation
// Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// My Solution
var summation = function (num) {
    // Code here
    result = 0
    for (let i = 1; i <= num; i++){
        result += i
    }
    return result
  }

// Other solutions
// const summation = n => n * (n + 1) / 2;

// function summation(num) {
//     return num * (num + 1) / 2
//   }

// TEST
describe('summation', function () {
    it('should return the correct total', function () {
      Test.assertEquals(summation(1), 1)
      Test.assertEquals(summation(8), 36)
    })
  })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Square(n) Sum

// Complete the square sum function so that it squares each 
// number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// My Solution
function squareSum(numbers){
  let sum = 0
  numbers.forEach( num => {
      sum += Math.pow(num,2)
  })
  return sum
}

// Different solution
function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}

// TEST
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(squareSum([1,2]), 5)
Test.assertEquals(squareSum([0, 3, 4, 5]), 50)
Test.assertEquals(squareSum([]), 0)
});
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Remove String Spaces
// Simple, remove the spaces from the string, then return the resultant string.

// My Solution
function noSpace(x){
  return x.split(" ").join("")
}

// Different Solution


// TEST
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Fixed Tests", () => {
    assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
    assert.strictEqual(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
    assert.strictEqual(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Counting sheep...

// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined.

// My Solution
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let sheep = 0
  arrayOfSheep.forEach( present => {
    if ((present !== null || present !== undefined) && present === true) {
      sheep += 1
    }
  })
  return sheep
}

Elegant Solution
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// TEST
describe("Tests", () => {
  it("test", () => {
var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];
              
Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total")
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function 1 - hello world

// Description:
// Make a simple function called greet that returns the most-famous "hello world!".
// Style Points

// Sure, this is about as easy as it gets. But how clever can you be to create 
// the most creative hello world you can think of? What is a "hello world" 
// solution you would want to show your friends?

// My Solution
function greet() {
  return "hello world!";
  }

// Other Solution
const greet = () => "hello world!";

// TEST
const assert = require("chai").assert;

describe("Testing function", function() {
  it("Is it a function?", function() {
    assert.strictEqual(typeof greet, "function", "greet should be a function");
  });
  it("Correct return-value?", function() {
    assert.strictEqual(greet(), "hello world!");
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Keep Hydrated!

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, 
// he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the 
// number of litres Nathan will drink, rounded to the smallest value.

// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

// My Solution
function litres(time) {
  time = Math.trunc(time)
  let drink = time * 0.5
  return Math.trunc(drink);
}

// Other Solution
function litres(time) {
  return Math.floor(time * 0.5);
}

// TEST
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Fixed tests', () => {
  it('Tests', () => {
    assert.strictEqual(litres(2), 1, 'should return 1 litre');
    assert.strictEqual(litres(1.4), 0, 'should return 0 litres');
    assert.strictEqual(litres(12.3), 6, 'should return 6 litres');
    assert.strictEqual(litres(0.82), 0, 'should return 0 litres');
    assert.strictEqual(litres(11.8), 5, 'should return 5 litres');
    assert.strictEqual(litres(1787), 893, 'should return 893 litres');
    assert.strictEqual(litres(0), 0, 'should return 0 litres');
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Century From Year

// Introduction

// The first century spans from the year 1 up to and including the year 100, 
// the second century - from the year 101 up to and including the year 200, etc.
// Task

// Given a year, return the century it is in.
// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// My Solution
function century(year) {
  // Finish this :)
  return Math.ceil(year/100);
}

// TEST
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(century(1705), 18, 'Testing for year 1705');
Test.assertEquals(century(1900), 19, 'Testing for year 1900');
Test.assertEquals(century(1601), 17, 'Testing for year 1601');
Test.assertEquals(century(2000), 20, 'Testing for year 2000');
Test.assertEquals(century(89), 1, 'Testing for year 89');
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Convert a String to a Number!

// Description
// We need a function that can transform a string into a number.
// What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string
// is a perfectly valid representation of an integral number.
// Examples

// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// My Solution
var stringToNumber = function(str){
  // put your code here
  return Number(str);
}

// Other Solution
var stringToNumber = function(str){
  return parseInt(str);
}

// TEST
describe( "stringToNumber", function(){
  it( "should work for the examples" , function(){
    Test.assertEquals(stringToNumber("1234"),1234)
    Test.assertEquals(stringToNumber("605"), 605)
    Test.assertEquals(stringToNumber("1405"),1405)
    Test.assertEquals(stringToNumber("-7"),  -7)
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Basic Mathematical Operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// My Solution
function basicOp(operation, value1, value2){
  return eval(value1 + operation + value2)
}

// TEST
describe("Tests", () => {
  it("test", () => {
console.log("Basic tests\n");
Test.assertSimilar(basicOp('+', 4, 7), 11);
Test.assertSimilar(basicOp('-', 15, 18), -3);
Test.assertSimilar(basicOp('*', 5, 5), 25);
Test.assertSimilar(basicOp('/', 49, 7), 7);
  });
});