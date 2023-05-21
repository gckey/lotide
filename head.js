// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* a function which returns the first item in the array. */
const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};
/* TEST CODE */
assertEqual(head([]));
assertEqual(head([1]));
assertEqual(head([23, 'hello', 13]), 23);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");