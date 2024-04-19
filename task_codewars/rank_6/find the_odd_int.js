'use strict';

// task:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


function findOdd(A) {
    let index = [];
    const arr = [...A].sort();

    for (let i = 1; i <= arr.length; i++) {
      if (arr[i-1] != arr[i] && i%2 != 0) {
        index.push(i);
      }
    }

    return arr[index[0] - 1];
}

console.log( findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]) );