// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let newArr;
let testArr1 = [];
let testArr2 = [9];
let testArr3 = [101,102,103];


const tail = function(arr) {
  if (arr.length >= 1) {
    newArr = arr.slice(1);
    return newArr;
  }
  return arr;
};
console.log(tail(testArr1));
console.log(tail(testArr2));
console.log(tail(testArr3));

//Test
assertEqual(tail(testArr1).length, 0);
assertEqual(tail(testArr2).length, 0);
assertEqual(tail(testArr3).length, 2);

/* Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/