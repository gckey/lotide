/** FUNCTION IMPLEMENTATION reverse.js
 * Takes command line arguments (strings)
 * Reverses each string
 * Logs each reversed string on a new line.
*/
const args = process.argv.slice(2);

const reverse = function (str) {
  let reversed = "";
  // Iterate from the last charachter to the first
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

// Process each argument and output the reversed string
for (let j = 0; j < args.length; j++) {
  console.log(reverse(args[j]));
}
