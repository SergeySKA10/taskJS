'use strict';

// task: написать алгоритм бинарного поиска

const questionNum = +prompt('Загадай число от 1 до 10000', ''),
      wrapper = document.querySelector('.wrapper'),
      numbers = wrapper.querySelector('.num'),
      attempt = wrapper.querySelector('.count');

wrapper.style.cssText = `
    display: block;
    width: 500px;
    margin: 50px auto;
    text-alaign: center;
    font-size: 30px;
`;

const arrNums = [];

for (let i = 1; i < 10001; i++) {
    arrNums.push(i);
}

let count = 0;

function binarySeach(arr, num) {
    let middleNum = arr[Math.floor((arr.length - 1) / 2)],
    res;

    if (num < middleNum) {
        count++;
        return res = binarySeach([...arr.slice(0, Math.floor((arr.length - 1) / 2))], num);
    } else if (num > middleNum) {
        count++;
        return res = binarySeach([...arr.slice(Math.floor((arr.length - 1) / 2) + 1, arr.length)], num);
    } else if (num == middleNum) {
        count++;
        res = middleNum;
    } else {
        res = null;
    }

    return res; 
}

const result = binarySeach(arrNums, questionNum);

numbers.textContent = arrNums.indexOf(result);
attempt.textContent = count;


// реализация рекурсивного бинарного поиска

const arr = [];

for (let i = 0; i < 100; i++) {
    arr.push(i);
}

const num = 78;

function binarySearchRecursive(arr, x, low = 0, high = arr.length - 1) {
    const mid = Math.floor(low + (high - low) / 2)
    if (high >= low) {
      if (arr[mid] === x) {
        // item found => return its index
        return mid
      }
  
      if (x < arr[mid]) {
        // arr[mid] is an upper bound for x, so if x is in arr => low <= x < mid
        return binarySearchRecursive(arr, x, low, mid - 1)
      } else {
        // arr[mid] is a lower bound for x, so if x is in arr => mid < x <= high
        return binarySearchRecursive(arr, x, mid + 1, high)
      }
    } else {
      // if low > high => we have searched the whole array without finding the item
      return -1
    }
  }

  console.log( binarySearchRecursive(arr, num) );

  // реализация итеративного 

  function binarySearchIterative(arr, x, low = 0, high = arr.length - 1) {
    while (high >= low) {
      const mid = Math.floor(low + (high - low) / 2)
  
      if (arr[mid] === x) {
        // item found => return its index
        return mid
      }
  
      if (x < arr[mid]) {
        // arr[mid] is an upper bound for x, so if x is in arr => low <= x < mid
        high = mid - 1
      } else {
        // arr[mid] is a lower bound for x, so if x is in arr => mid < x <= high
        low = mid + 1
      }
    }
    // if low > high => we have searched the whole array without finding the item
    return -1
  }

  console.log( binarySearchIterative(arr, num) );