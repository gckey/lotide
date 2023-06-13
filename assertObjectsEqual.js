const eqObjects = require('./eqObjects');

/* FUNCTION IMPLEMENTATION */
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual,expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
module.exports = assertObjectsEqual;

// Tests
// assertObjectsEqual({a: "1", b: "2"}, {b: "2", a: "1"});

assertObjectsEqual(eqObjects({a: "1", b: "2"}, {b: "2", a: "1"}), true);
assertObjectsEqual(eqObjects({a: "1", b: "2"}, { c: "1", d: ["2", 3, 4] }), false);