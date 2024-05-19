'use strict';

// 1. task: написать функцию для рекурсивного подсчета элементов в списках, массивах
// 2. task: написать рекурсивную функцию для поиска наибольшего числа в массиве

// 1. Подсчет элементов:

const numbs = [2, 4, 6];

// функция рекурсивного подсчета суммы чисел в массиве

function sum(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        return arr[0] + sum(arr.slice(1, arr.length));
    }
}

console.log( sum(numbs) ); // 12

// функция рекурсивного подсчета элементов в массиве

function lengthList(arr) {
    if (arr.length === 1) {
        return 1
    } else {
        return 1 + lengthList(arr.slice(1, arr.length));
    }
}

// функция подсчета элементов

function calcElement(list) {
    if (list === null || list === undefined) return 0;

    let countLength = 0;

    if (Array.isArray(list)) {
        return lengthList(list);
    } else {
        const arrList = [];

        for (let key in list) {
            if (typeof(list[key]) === 'object') {
                countLength = countLength + 1 + calcElement(list[key]);
            } else {
                arrList.push(list[key]);
            }
            
        }

       countLength += lengthList(arrList);

       return countLength;
    }
}

const strLengt = calcElement('Hello World!');
const objLength = calcElement({a: 1, b: 2, c: 3, d: 4, e: {f: 5, g: 6, h: {i: 7, j: 8}}});

console.log(strLengt); // 12
console.log(objLength); // 10
console.log( calcElement(numbs) ); // 3


// 2 Поиск наибольшего числа в массиве

function seachBigNum(arr) {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];

    if (arr.length === 2) {
        return arr[0] > arr[1] ? arr[0] : arr[1];
    } else {
        const bigNum = seachBigNum(arr.splice(1, arr.length));

        return arr[0] > bigNum ? arr[0] : bigNum;
    }
}

const numbers = [100, 20, 25, 19, 36, 305, 98, 7];

console.log( seachBigNum(numbers) );