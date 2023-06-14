const assertArraysEqual = require('./assertArraysEqual');

/*Function that keep collecting items from a provided array until the callback provided returns a truthy value */
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