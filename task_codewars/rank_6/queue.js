'use strict';

// task:
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function
// to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, 
// and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.

// output
// The function should return an integer, the total time required.

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12

// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

function queueTime(customers, n) {
    if (customers.length === 0) return 0;
    
    const res = [];
    
    for (let i = 0; i < customers.length; i++) {
      if (i < n) {
        res.push(customers[i]);
        res.sort((a, b) => a - b);
      } else {
        res[0] += customers[i];
        res.sort((a, b) => a - b);
      }
    }
    
    return res[res.length - 1];
}

console.log( queueTime([2,3,10], 2) );
console.log( queueTime([5,3,4], 1) );
console.log( queueTime([10,2,3,3], 2) );