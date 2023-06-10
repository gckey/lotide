// test/eqArraysTest.js

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Tests
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["Lighthouse Labs", "Bootcamp"], ["Lighthouse Labs", "Bootcamp"]), true);   //=> true