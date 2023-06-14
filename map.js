// const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// Function Implementation
const words = ["ground", "control","to","major","tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

/* TEST CODES */

// const output1 = map(words, word => word[0]); //console.log(output1);
// assertArraysEqual(output1, [ 'g', 'c', 't', 'm', 't' ]);

const output2 = map(words, word => word + ' ' + 'check');
assertArraysEqual(output2, ["ground check", "control check", "to check", "major check", "tom check"]);

const output3 = map(words, word => word[4]);
assertArraysEqual(output3, ['n','r', undefined, 'r', undefined]);

const output4 = map(words, word => word.length);
assertArraysEqual(output4, [6, 7, 2, 5, 3]);