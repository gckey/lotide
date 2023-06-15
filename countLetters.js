// const assertEqual = require('./assertEqual');

// Function that takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
const countLetters = function(sentence) {
  const letterCounts = {}; // Initialize an empty object to store letter counts

  for (let char of sentence) { // Iterate over each character in the sentence
    if (char !== " ") { // Exclude spaces from counting
      if (letterCounts[char]) { // If the letter already exists in letterCounts object
        letterCounts[char]++; // Increment the count for that letter by 1
      } else { // If the letter is encountered for the first time
        letterCounts[char] = 1; // Initialize the count for that letter to 1
      }
    }
  }
  return letterCounts; // Return the object containing letter counts
};

module.exports = countLetters;