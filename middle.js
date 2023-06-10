/* Refractored middle.js */

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

module.exports = middle;