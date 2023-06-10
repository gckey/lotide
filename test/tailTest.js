// test/tailTest.js

const assertEqual = require('../assertEqual');
const tail = require('../tail');


let testArr1 = [];
let testArr2 = [9];
let testArr3 = [101,102,103];

//Test code
assertEqual(tail(testArr1).length, 0);
assertEqual(tail(testArr2).length, 0);
assertEqual(tail(testArr3).length, 2);