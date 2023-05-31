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

/**Function that keep collecting items from a provided array until the callback provided returns a truthy value **/
const takeUntil = function(array, callback) {
  //Create an empty array to store the result
  const results = [];
  //Iterate through the input array
  for (let item of array) {
    // Inside the loop, call the callback function using the current element of the array
    if (callback(item)) {
      // If the callback returns truthy stop slicing the array and return the results
      return results;
    }
    results.push(item); //add the current element to the result array
  }
  
  // return the entire array if the callback never returns true
  return results;
};

//TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
assertArraysEqual((results1), [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual((results2), [ "I've", 'been', 'to', 'Hollywood' ]);