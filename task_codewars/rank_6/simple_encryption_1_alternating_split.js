'use strict';

// task:
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S,
// this process should be repeated N times.
// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.
// If the string S is an empty value or the integer N is not positive, return the first argument without changes.



function encrypt(text, n) {
    if (n <= 0 || text == null) return text;
    
    let cipherText = text.split('');
    
    for (let i = 0; i < n; i++) {
      cipherText = cipherText.filter((el, ind) => ind%2 != 0)
          .concat(cipherText.filter((el, ind) => ind%2 === 0));
    }

    return cipherText.join('');
}
  
function decrypt(encryptedText, n) {
    if (n <= 0 || encryptedText == null) return encryptedText;
    
    let keys = encryptedText.split(''),
        transcriptText = [];
    
    for(let j = 0; j < n; j++) {
      transcriptText = [];
      
      let elemKeyOne = keys.filter((el, ind) => ind >= ((keys.length-1) / 2)),
          elemKeyTwo = keys.filter((el, ind) => ind < ((keys.length-1) / 2));
      
      for (let i = 0; i <= ((keys.length-1) / 2); i ++) {
        transcriptText.push(elemKeyOne[i]);
        if (elemKeyTwo[i] != undefined) transcriptText.push(elemKeyTwo[i]);
      }
      keys = transcriptText;
    }

    return transcriptText.join('');
}

console.log( encrypt("This kata is very interesting!", 1) );

console.log( decrypt("hskt svr neetn!Ti aai eyitrsig", 1) );