// head.js

const assertEqual = require('./assertEqual');

/* a function which returns the first item in the array. */
let newArr;

const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

module.exports = head;