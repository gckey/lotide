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

const words = ["ground", "control","to","major","tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//TEST CODES

const output1 = map(words, word => word[0]); //console.log(output1);
// assertArraysEqual(output1, [ 'g', 'c', 't', 'm', 't' ]);

const output2 = map(words, word => word + ' ' + 'check');
assertArraysEqual(output2, ["ground check", "control check", "to check", "major check", "tom check"]);

const output3 = map(words, word => word[4]);
assertArraysEqual(output3, ['n','r', undefined, 'r', undefined]);

const output4 = map(words, word => word.length);
assertArraysEqual(output4, [6, 7, 2, 5, 3]);