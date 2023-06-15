const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');

// Test codes
assertObjectsEqual(eqObjects({a: "1", b: "2"}, {b: "2", a: "1"}), true);
assertObjectsEqual(eqObjects({a: "1", b: "2"}, { c: "1", d: ["2", 3, 4] }), false);