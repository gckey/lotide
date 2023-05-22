// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Function to compare two arrays and determine if they are a perfect match.
const eqArrays = function(array1, array2) {
  // Check if the arrays have different lengths
  if (array1.length !== array2.length) {
    return false;
  }
  // Iterate over the elements of the arrays
  for (let i = 0; i < array1.length; i++) {
    // Check if the current element is an array itself
    if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
      // If the current element is an array and the recursive call to eqArrays returns false, it means the nested arrays are not a perfect match
      return false;
    }
    // Check if the current element is not an array and if it's not equal in both arrays

    if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {
      // if the element is not an array and the items are not equal then return false
      return false;
    }
  }
  return true;
};

// Tests
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["Lighthouse Labs", "Bootcamp"], ["Lighthouse Labs", "Bootcamp"]), true);   //=> true