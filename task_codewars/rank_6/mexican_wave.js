'use strict';

// task:
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

function wave(str){
    if(str.length == 0) return []
    else {
      const waveMex = [];
      loop1: for(let i = 0; i < str.length; i++) {
        if(str[i] === ' ') {
          continue loop1;
        }
        waveMex.push(`${str.slice(0, i)}${str[i].toUpperCase()}${str.slice(i+1)}`);
      }
      return waveMex;
    }
}

console.log( wave("hello") );