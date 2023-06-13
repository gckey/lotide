const assertArraysEqual = require('./assertArraysEqual');
// Function Implementation
const flatten = function(arr) {
  /* Initialize an empty array that will be returned with all the elements.*/
  const flattenedArray = [];
  // iterate through each element in the provided array
  for (let i = 0; i < arr.length; i++) {
    //Check whether the current element is an array using Array.isArray()
    if (Array.isArray(arr[i])) {
      //iterate through each element of the nested array
      for (let j = 0; j < arr[i].length; j++) {
        flattenedArray.push(arr[i][j]);
      }
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

// Tests
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[10, 20], [30, 40, 50], 60]), [10, 20, 30, 40, 50]);