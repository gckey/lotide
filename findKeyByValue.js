const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  // Get a list of all the keys in an object
  const keys = Object.keys(object);
  // Loop over each keys using for ... of
  for (const key of keys) {
    // Check if the value at the current key matches the given value
    if (object[key] === value) {
      return key;
    }
  }
  // Return undefined if no key with the given value is found
  return undefined;
};

// Test code
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);