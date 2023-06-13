const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
/*
Function that take in 2 obj and returns T or F
Returns T if both objects have identical keys with identical values.
Otherwise you get back a big fat false!
*/

const eqObjects = function(object1, object2) {
  // Retrieve the keys of object1 and object2
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // Check if the objects have a different number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }
  // Iterate over the keys of object1
  for (let key of keys1) {
    // Retrieve the values for the current key from both objects
    const val1 = object1[key];
    const val2 = object2[key];
    // Check if both values are arrays
    if (Array.isArray(val1) && Array.isArray(val2)) {
      // If they are arrays, compare them using eqArrays function
      if (!eqArrays(val1, val2)) {
        return false;
      } else
        continue; // Continue to the next iteration of the loop
    }
    // If the values are not arrays, perform a strict equality check
    if (val1 !== val2) {
      return false;
    }
  }
  // If all checks pass, the objects are considered equal
  return true;
};

module.exports = eqObjects;

//TEST CODE

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual((eqObjects(shirtObject , longSleeveShirtObject)), false);