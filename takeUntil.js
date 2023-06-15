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

module.exports = takeUntil;