'use strict';

// Задачи:

// 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив,
//  а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.

// 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку,
//  которая содержит названия фильмов через запятую.

// Пример:

// showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"

// 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма
//  будет новое поле id. Значение этого поля установите по нумерации фильма.

// Пример:
// setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },
//   { name: 'Some bad film', rating: 4, id: 3 }]

// 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из
//  фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray);

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);
}

console.log( showGoodFilms(films) );

function showListOfFilms(arr) {
    return arr.map(film => film.name).join(', ');
}

console.log( showListOfFilms(films) );

function setFilmsIds(arr) {
    const res = [];
    
    arr.forEach((film, ind) => {
      film.id = ind;
      res.push(film);
    });
    
    return res;
}

const tranformedArray = setFilmsIds(films);

console.log(tranformedArray);

function checkFilms(arr) {
    let count = 0;
  
    arr.forEach(film => {
      if ('id' in film) count++
    });
    console.log(count);
    return count === arr.length ? true : false;
}

const res = checkFilms(tranformedArray);

console.log(res);