'use strict';

// task написать алгоритм быстрой сортироки


// Время выполнения: O(n**)

function quickSort(arr) {
    if (arr.length === 0 || arr.length === 1) {
        return arr;
    } else {
        const supportElem = arr[0],
              beforeElems = arr.filter(el => el < supportElem),
              afterElems = arr.filter(el => el > supportElem);

        return [...quickSort(beforeElems), supportElem, ...quickSort(afterElems)];
        
    }
}

const nums = [10, 5, 2, 3];

console.log( quickSort(nums) );


// время выполнения: O(nlogn) - слиянием

function qSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        const supportElem = arr[Math.floor((arr.length - 1) / 2)],
              beforeElems = [],
              afterElems = []

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < supportElem) {
                beforeElems.push(arr[i]);
            }
            if (arr[i] > supportElem) {
                afterElems.push(arr[i])
            }
        }
        
        return [...qSort(beforeElems), supportElem, ...qSort(afterElems)];
        
    }
}

const numbers = [3, 8, 1, 25, 40, 16, 19, 2, 88, 11, 7, 42, 23];

console.log( qSort(numbers) );

// быстрая сортировка
function quickSort(items) {
    const length = items.length
  
    if (length <= 1) {
      return items
    }
    const PIVOT = items[0]
    const GREATER = []
    const LESSER = []
  
    for (let i = 1; i < length; i++) {
      if (items[i] > PIVOT) {
        GREATER.push(items[i])
      } else {
        LESSER.push(items[i])
      }
    }
  
    const sorted = [...quickSort(LESSER), PIVOT, ...quickSort(GREATER)]
    return sorted
  }
