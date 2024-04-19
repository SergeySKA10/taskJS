'use strict';

// task:
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


function towerBuilder(nFloors) { 
    let elemOne = ' ',
        elemTwo = '*';
    const res = [];
    
    for (let i = 0; i < nFloors; i++) {
      let space= elemOne.repeat(nFloors - (i+1));
      let star = elemTwo.repeat((2*i)+1);
      res.push(`${space}${star}${space}`);
    }

    return res;
}

console.log( towerBuilder(7) );