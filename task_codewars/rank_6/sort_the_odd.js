'use strict';

//Task: You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    const oddNumbers = array.filter(el => el % 2 !== 0)
                       .sort((a, b) => a - b),
          resultSortArray = [];
    
    array.forEach(el => {
      if (el % 2 !== 0) {
        resultSortArray.push(oddNumbers[0]);
        oddNumbers.shift();
      } else {
        resultSortArray.push(el);
      }
    
    });
    
    return resultSortArray;
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));