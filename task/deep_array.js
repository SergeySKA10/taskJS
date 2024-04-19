'use strict';

// Задача:
// Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы.
// Учтите, что сам вложенный массив тоже входит в счет.

function deepCount(a) {
    if (a.length === 0) return 0;
    
    let count = 0,
        res = 0;
    for (let key of a) {
      
        if (!Array.isArray(key)) {
            count++;
        } else {
            return count + 1 + deepCount(key);  
        }
    }

    res += count;

    return res;
}

console.log(deepCount([1, 2, [3, 4, [5]]]));