'use strict';

// task:
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url){
    if ( url.includes('www') ) {
      let dots = [];

      for(let i = 0; i < url.length; i ++) {
         if(url[i] === '.') {
           dots.push(i);
         }
      }

      let res = url.slice(dots[0]+1, dots[1]);
      return res;

    } else if( !url.includes("//")) {
       let dots = [];

       for(let i = 0; i < url.length; i ++) {
         if(url[i] === '.') {
           dots.push(i);
         }
      }

      let res = url.slice(0, dots[0]);
      return res;

    } else {
      let slash = [];
      let dots = [];

      for(let i = 0; i < url.length; i++) {
        if ( url[i] === '/' ) {
          slash.push(i);
        } else if ( url[i] === '.' ) {
          dots.push(i);
        }
      }

      let res = url.slice(slash[1]+1, dots[0]);
      return res;
    }
}

console.log( domainName("http://github.com/carbonfive/raygun") );