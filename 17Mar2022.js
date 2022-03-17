// Volume of a Cuboid

// Bob needs a fast way to calculate the volume of a cuboid with three values: length, 
// width and the height of the cuboid. Write a function to help Bob with this calculation.
// Solution:
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
// Solution:
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

// Solution
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

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

// Solution
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