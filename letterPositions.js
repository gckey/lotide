const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  const lowerCase = sentence.toLowerCase();
  // loop through the characters of the string to get the positions of each letter in the string
  for (let i = 0; i < lowerCase.length; i++) {
    let letter = lowerCase[i];
    // Check if the character is not a space
    if (letter !== ' ') {
    // If the character is not in the results object, create an empty array for it
      if (!results[letter]) {
        results[letter] = [];
      }
      // Push the index (position) of the character into its corresponding array in the results object
      results[letter].push(i);
    }
  }
  //Return the results object
  return results;
};

module.exports = letterPositions;