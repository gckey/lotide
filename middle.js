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

// ACTUAL FUNCTION
const middle = function(arr) {
  let middleElements = [];
  const middleIndex = Math.floor(arr.length / 2); //This gives the index of the middle element or the first middle element in the case of an even number of elements

  if (arr.length > 2) {
    //If the array length is greater than 2 and even, we slice two elements starting from the index before the middle index and add them to middleElements.
    if (arr.length % 2 === 0) {
      // Even number of elements
      middleElements = arr.slice(middleIndex - 1, middleIndex + 1);
    } else {
      // Odd number of elements
      //If the array length is greater than 2 and odd, we push the middle element (at the middle index) directly to middleElements.
      middleElements.push(arr[middleIndex]);
    }
  }
  return middleElements;
};

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1,2,3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]