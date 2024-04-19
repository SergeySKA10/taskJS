'use strict';

// task: 
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it. "a" = 1, "b" = 2 ...

function alphabetPosition(text) {
    if (text.length === 0) return '';
    
    let digitText = '',
        string = text.toLowerCase();
    
    for (let key of string) {
      if (key.charCodeAt() > 96 && key.charCodeAt() < 123) {
        digitText += `${key.charCodeAt() - 96} `;
      } else {
        continue;
      }
    }
    
    return digitText.trim();
}

  console.log(alphabetPosition("Hello World"));