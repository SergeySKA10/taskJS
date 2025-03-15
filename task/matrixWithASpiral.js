// task:
// Создать функцию по заполнению двумерного массива змейкой. Начало с 1. Аргументы в функции высота и ширина массива.

const createMatrix = (height, width) => {
    // создадим массив с длинной height, который заполним масиивами с длинной width
    const matrix = new Array(height).fill().map(() => new Array(width).fill(''));

    // создадим промежуточные элементы
    let counter = 1, // переменная заполнения массива
        startCol = 0, // начало по вертикали
        endCol = width - 1, // конец по вертикали
        startRow = 0, // начало по горизонтали
        endRow = height - 1 // конец по горизонтали

    // создадим цикл с условием выполнения 
    while (startCol <= endCol && startRow <= endRow) {
        // заполняем первый массив по горизонтали
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = counter;
            counter++;
        }

        // увеличиваем значение по вертикали на 1
        startRow++;

        // заполняем конечные элементы массивов (по вертикали)
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = counter;
            counter++;
        }

        // уменьшаем значение конечных элементов по горизонтали на 1
        endCol--;

        // заполняем конечный массив (по горизонтали)
        for (let i = endCol; i >= startCol; i--) {
            matrix[endRow][i] = counter;
            counter++;
        }

        // уменьшаем значение endRow
        endRow--;

        // заполняем первые элементы массивов (по вертикали)
        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startCol] = counter;
            counter++;
        }

        // увеличиваем значение startCol на 1 (по горизонтали)
        startCol++;
    } 
    
    return matrix;
}

console.log( createMatrix(6, 7) );





