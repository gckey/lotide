// FUNCTION IMPLEMENTATION tail.js

// const assertEqual = require('./assertEqual');

let newArr;
const tail = function(arr) {
  if (arr.length >= 1) {
    newArr = arr.slice(1);
    return newArr;
  }
  return arr;
};

module.exports = tail;