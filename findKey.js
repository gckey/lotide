// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
/** Function that scans an object and returns the first key for which the callback returns a truthy value **/
const findKey = function(object, callback) {
  // Get a list of all the keys in an object
  const keys = Object.keys(object);
  // Loop through each keys of the object
  for (const key of keys) {
    // Call the callback function on the value associated with the current key
    if (callback(object[key])) {
      // If the callback returns a truthy value, return the current key
      return key;
    }
  }
  //if no key with the given value is found, return `undefined`
  return undefined;
};

//TEST CODE
const output1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
// console.log(output1);
assertEqual(output1, "noma");