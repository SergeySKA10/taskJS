'use strict';

// task:
// В математике есть такое понятие, как композиция функций. В программирование этот прием тоже перекочевал и является весьма удобным в части ситуаций.
// Допустим, у вас есть отдельные функции, которые в итоге вычисляют скидку:

// const multiply20 = (price) => price * 20; const divide100 = (price) => price / 100; const normalizePrice = (price) => price.toFixed(2);
// В итоге мы получим результат, но эта цепочка не совсем удобна. А если действий там будет много? Можно запустить её вот так:

// result = a(b(c(x))) const discount = normalizePrice(divide100(multiply20(200)));

// Но при увеличении количества функций это превратиться в нечитаемый ад. И вот задача состоит в том, чтобы написать функцию compose,
// которая будет принимать все эти функции и делать тоже самое. То есть, организовывать композицию функций. 
// Обратите внимание на порядок записи функций.

// const discount = compose(normalizePrice, divide100, multiply20); discount(200.0);
// Функций может быть сколько угодно и они могут принимать только один начальный аргумент.


const compose = (...rest) => acc => {
    for (let i = rest.length; i > 0; i--) {
      acc = rest[i-1](acc);
    }
    return acc;
};

// task 2:
// А теперь напишите функцию композиции composeWithArgs, которая принимает сколько угодно аргументов в начале. Пример:
// const add1 = function(a){return a + 1}const addAll3 = function(a,b,c){return a + b + c}composeWithArgs(add1,addAll3)(1,2,3) => Вернет 7

const composeWithArgs = (...rest) => (...arg) => {
    let resultArgs = 0;
    
    for (let i = rest.length; i > 0; i--) {
      if (i === rest.length) {
        resultArgs = rest[i-1](...arg);
      } else {
        resultArgs = rest[i-1](resultArgs);
      }
    }
    
    return resultArgs;
};