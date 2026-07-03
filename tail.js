// FUNCTION IMPLEMENTATION tail.js


const tail = function(arr) { 
  // Remove if stmt entirely.
  return arr.slice(1); // arr.slice(1) also handles empty arrays or arrays with single element.
};

module.exports = tail;