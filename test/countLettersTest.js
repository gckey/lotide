const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

// Test Code
/* Printout the result of countLetters */
assertEqual(countLetters('lighthouse in the house')["u"], 2);
assertEqual(countLetters('web dev flex program')["b"], 1);