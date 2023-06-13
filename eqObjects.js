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

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function that take in 2 obj and returns T or F
// Returns T if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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

//////////////////////////// TEST CODE

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual((eqObjects(shirtObject , longSleeveShirtObject)), false);