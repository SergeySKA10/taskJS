'use strict';

// task:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string,
// they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    let res = '',
        alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',
        codeRot = 'NnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMm'
     
    for (let i = 0; i < message.length; i++) {
       if(message.charCodeAt(i) > 96 && message.charCodeAt(i) < 123 || message.charCodeAt(i) >= 65 && message.charCodeAt(i) <=90) {
         for(let j = 0; j < alphabet.length; j++) {
           if(message[i] === alphabet[j]) {
             res += codeRot[j]
           }
         }
       } else {
         res += message[i];
       }
    }

    return res;
}

console.log( rot13('hello') );