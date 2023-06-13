# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gckey/lotide`

**Require it:**

`const _ = require('@gckey/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: A function that returns the first element of an array.
* `tail`: A function that returns a new array containing all elements of the input array except the first element.
* `middle`: A function that returns the middle element(s) of an array. If the array has an odd length, it returns a single middle element. If the array has an even length, it returns an array with the two middle elements.
* `assertArraysEqual`: A function that compares two arrays and checks if they are equal. It outputs a message indicating whether the arrays are equal or not.
* `assertEqual`: A function that compares two values and checks if they are equal. It outputs a message indicating whether the values are equal or not.
* `assertObjectsEqual`: A function that compares two objects and checks if they are equal. It outputs a message indicating whether the objects are equal or not.
* `countLetters`: A function that takes in a string and returns an object with each unique letter as a key and the count of occurrences as the value.
* `countOnly`: A function that takes in an array and an object specifying which elements to count. It returns an object with the count of occurrences for the specified elements.
* `eqArrays`: A function that compares two arrays and checks if they are deeply equal. It returns a boolean value indicating whether the arrays are equal or not.
* `eqObjects`: A function that compares two objects and checks if they are deeply equal. It returns a boolean value indicating whether the objects are equal or not.
* `findKey`: A function that takes in an object and a callback function. It searches for a key in the object based on the condition specified by the callback function and returns the key.
* `findKeyByValue`: A function that takes in an object and a value. It searches for a key in the object that matches the specified value and returns the key.
* `flatten`: A function that takes in an array containing nested arrays and returns a new flattened array with all the elements.
* `letterPositions`: A function that takes in a string and returns an object with each unique letter as a key and an array of positions where the letter occurs in the string as the value.
* `map`: A function that takes in an array and a callback function. It applies the callback function to each element of the array and returns a new array with the modified elements.
* `takeUntil`: A function that takes in an array and a callback function. It keeps collecting elements from the array until the callback function returns a truthy value. It returns a new array with the collected elements.
* `without`: A function that takes in two arrays: the source array and an array of items to remove. It returns a new array with all the items from the source array except the ones specified for removal.