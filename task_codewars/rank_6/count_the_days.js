'use strict';

//task:
// Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.
// Your job is to help her out.

// Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

// If the event is in the past, return "The day is in the past!"
// If the event is today, return "Today is the day!"
// Else, return "x days"

function countDays(d){
    const today = Math.floor(new Date().getTime() / 86400000),
          dayEvent = Math.floor(d.getTime() / 86400000);
    
    if (dayEvent < today) {
      return "The day is in the past!";
    } else if (dayEvent === today) {
      return "Today is the day!";
    } else {
      return `${Math.ceil(dayEvent - today)} days`;
    }
}

console.log( countDays(new Date("February 28, 2026")) );
console.log( countDays(new Date()) );