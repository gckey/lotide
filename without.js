
const assertArraysEqual = require('./assertArraysEqual');
// Function Implementation
const without = function(source, itemsToRemove) {
  // Iterate over the elements of the source array
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) { // Iterate over the elements of the itemsToRemove array
      if (source[i] === itemsToRemove[j]) { // Check if the current element in the source array is equal to the current element in the itemsToRemove array
        // If there is a match, remove the element from the source array using the splice() method
        source.splice(i, 1);
      }
    }
  }
  // Return the modified source array, which now contains only the elements not present in the itemsToRemove array
  return source;
};

let x = [1, 2, 3];
without(x, [1]); // => [2, 3]
assertArraysEqual(x, [1, 2, 3]);

let y = ["1", "2", "3"];
without(y, [1, 2, "3"]); // => ["1", "2"]
assertArraysEqual(y, ["1", "2", "3"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);