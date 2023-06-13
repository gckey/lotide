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

// FUNCTION IMPLEMENTATION FOR assertArraysEqual
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  const lowerCase = sentence.toLowerCase();
  // loop through the characters of the string to get the positions of each letter in the string
  for (let i = 0; i < lowerCase.length; i++) {
    let letter = lowerCase[i];
    // Check if the character is not a space
    if (letter !== ' ') {
    // If the character is not in the results object, create an empty array for it
      if (!results[letter]) {
        results[letter] = [];
      }
      // Push the index (position) of the character into its corresponding array in the results object
      results[letter].push(i);
    }
  }
  //Return the results object
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);