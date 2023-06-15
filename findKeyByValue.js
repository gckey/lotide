/* Function Implementation */
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
  return undefined;
};

module.exports = findKeyByValue;