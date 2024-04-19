'use strict';

//task: An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"

let isAnagram = (test, original) => {
    if (test.length != original.length) return false;
    
    for (let key of test) {
      let reg = new RegExp(`${key}`, 'gi');
      if (test.match(reg)?.length != original.match(reg)?.length) {
        return false;
      }
    }
    
    return true;
};

console.log( (isAnagram("foefet", "toffee")) );