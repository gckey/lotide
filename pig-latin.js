// FUNCTION IMPLEMENTATION pig-latin.js

const args = process.argv.slice(2);
const toPigLatin = function(word) {
  // Move first letter to end, then add "ay"
  const firstLetter = word[0];
  const restOfWord = word.slice(1);
  return restOfWord + firstLetter + "ay";
};

// Iterate through each argument and append the output sentence

let output = "";
for (let i = 0; i < args.length; i++) {
  output = output + toPigLatin(args[i]);
  // Add space between words (but not after the last one)
  if (i < args.length) {
    output = output + " ";
  }
}

console.log(output);