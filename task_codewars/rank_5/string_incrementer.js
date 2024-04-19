'use strict'; 

// task:
// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

//Attention: If the number has leading zeros the amount of digits should be considered.



function incrementString (strng) {
    let num = strng.match(/[1-9]+$/g);
  
    function sum (str, n) {
      return str.replace(/[1-9]+$/g, '') + (Number(n.join('')) + 1)
    }
  
    if(strng.match(/0/) && num) {
      let regExp = /0([1-9])/;
    
      if(regExp.test(strng)) {
        let str = sum(strng, num);
        return str.length === strng.length ? str : str.replace('0', '');
      } else {
        return strng.replace(/\d+$/g, '') + (Number(num.join('')) + 1);
      }
      
    } else if(strng.match(/0/)) {
      let str = strng.slice(0, -1) + 1;
      return str;
      
    } else if(num) {
      return sum(strng, num);
    
    } else {
      return strng + 1;
    }
}