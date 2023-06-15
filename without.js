const without = function(source, itemsToRemove) {
  // Iterate over the elements of the source array
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) { // Iterate over the elements of the itemsToRemove array
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
      }
    }
  }
  return source;
};

module.exports = without;