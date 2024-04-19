'use strict';

// task:
// This time no story, no theory. The examples below show you how to write function accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    let newS = '';
    for (let i = 0; i < s.length; i++) {

        for (let j = i + 1; j > 0; j--) {
            if (j == i + 1) {
            newS += `${s[i].toUpperCase()}`;
            } else {
            newS += `${s[i].toLowerCase()}`;
            }
        }

        newS += '-';
    }

    return newS.slice(0, -1);
}

console.log( accum("RqaEzty") );