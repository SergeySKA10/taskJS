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