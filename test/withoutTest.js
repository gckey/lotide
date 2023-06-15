const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

// Test codes
let x = [1, 2, 3];
without(x, [1]); // => [2, 3]
assertArraysEqual(x, [1, 2, 3]);

let y = ["1", "2", "3"];
without(y, [1, 2, "3"]); // => ["1", "2"]
assertArraysEqual(y, ["1", "2", "3"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);