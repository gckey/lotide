const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

// Tests
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[10, 20], [30, 40, 50], 60]), [10, 20, 30, 40, 50]);