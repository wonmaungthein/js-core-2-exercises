/*
  We have already implemented one part of this function removeVowel()
  Check the test and see how it is used and understand the use of prototype
  Notice how we augmented the String data type with a new method removeVowels and we used directly on the String type
  1. Write more tests to play with the result (try using new String - does it still work?)
  2. remove .skip from the second test (see it running and failing - RED)
  3. refactor the function to CAPITALISE THE RESULT after removing vowels
 */

String.prototype.removeVowels = function() {
  return this.replace(/[aeiou]/ig, '');
};