'use strict';

// функция нахождения наименьшего элемента массива

function findSmallerElem(arr) {
    let elemSmall = arr[0],
        indElemSmall = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < elemSmall) {
            elemSmall = arr[i];
            indElemSmall = i;
        }
    }

    return indElemSmall;
}

const numbers = [5, 3, 6, 2, 10];

console.log( findSmallerElem(numbers) ); // 3

// функция сортировки выбором

function selectionSort(arr) {
    const sortArr = [];
    const copyArr = [...arr];

    for (let i = 0; i < arr.length; i++) {
        let elemSmall = findSmallerElem(copyArr);

        sortArr.push(+copyArr.splice(elemSmall, 1).join(''));
    }

    return sortArr;
}



const result = selectionSort(numbers);

console.log(numbers);
console.log(result);