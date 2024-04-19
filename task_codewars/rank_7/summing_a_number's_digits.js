'use strict';

//Task: Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
    const digitNums = String(number).match(/\d/g);
    return digitNums.reduce((sum, el) => sum + Number(el), 0);
}

console.log(sumDigits(18));