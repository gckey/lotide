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

module.exports = flatten;