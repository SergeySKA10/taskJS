'use strict';

//Task: Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url){
    if(url.indexOf('#') != -1) {
      return url.slice(0, url.indexOf('#'));
    }
  
    return url;
}

console.log(removeUrlAnchor("www.codewars.com#about"));
console.log(removeUrlAnchor("www.codewars.com?page=1"));