// test/headTest.js

const assertEqual = require('../assertEqual');
const head = require('../head');

/* TEST CODE */
assertEqual(head([]), undefined);
assertEqual(head([1]), 1);
assertEqual(head([23, 'hello', 13]), 23);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");