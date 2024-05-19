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


// время выполнения: O(nlogn)

function qSort(arr) {
    if (arr.length === 0 || arr.length === 1) {
        return arr;
    } else {
        const supportElem = arr[Math.floor((arr.length - 1) / 2)],
              beforeElems = arr.filter(el => el < supportElem),
              afterElems = arr.filter(el => el > supportElem);

        return [...qSort(beforeElems), supportElem, ...qSort(afterElems)];
        
    }
}

const numbers = [3, 8, 1, 25, 40, 16, 19, 2, 88, 11, 7, 42, 23];

console.log( qSort(numbers) );


