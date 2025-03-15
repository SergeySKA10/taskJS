// пример графа:

//         ---->   6 - А  -----   ------1 - А -------
// |                   |                      |
// начало              3 между A и В               конец
// |                   |                      |
//          -----> 2 - В  ----   -------5 - В -------

// СБОРКА ИЗНАЧАЛЬНЫХ ГРАФОВ

// создаем 3 таблицы
const graph = new Map(); // граф
const costs = new Map(); // таблица стоимостей
const parents = new Map(); // таблица родителей

// добавляем в граф изначальные параметры
graph.set('start', {});
graph.get('start')['a'] = 6;
graph.get('start')['b'] = 2;

// console.log(graph.get('start'));

// добавляем последующие параметры - пути от а
graph.set('a', {});
graph.get('a')['fin'] = 1;

// добавляем b
graph.set('b', {});
graph.get('b')['a'] = 3;
graph.get('b')['fin'] = 5;

// добавлем fin
graph.set('fin', {});

// console.log(graph.get('b'));

// заполняем таблицу стоимостей
costs.set('a', 6);
costs.set('b', 2);
costs.set('fin', Infinity);

// заполняем таблицу родителей
parents.set('a', 'start');
parents.set('b', 'start');
parents.set('fin', null);

// создаем уникальный массив для отслежвания обработанных узлов
const processed = new Set();

// функция поиска узла с наименьшей стоимостью
const findLowestCostNode = (costs) => {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    for (let key of costs.keys()) {
        const cost = costs.get(key);
        if (!processed.has(key) && cost < lowestCost) {
            lowestCost = cost;
            lowestCostNode = key;
        }
    }

    return lowestCostNode;
};

// console.log(findLowestCostNode(costs));

// алгоритм поиска наименьшей стоимости

const dijkstraAlgorithm = (graph, costs, parents) => {
    let node = findLowestCostNode(costs);

    while (node) {
        // получение стоимости
        let cost = costs.get(node);
        // получение соседей
        let neighbords = graph.get(node);

        // переберем соседей текущего узла и проверим есть ли более
        // быстрый способ добраться к ним через текущий узел
        for (let key in neighbords) {
            let newCost = cost + neighbords[key]; // складываем пути
            if (costs.get(key) > newCost) {
                // есл старое значение больше
                costs.set(key, newCost); // записываем новое
                parents.set(key, node); // устанавливаем нового родителя
            }
        }

        // помечаем узел как обработанный
        processed.add(node);
        // начинаем поиск наименьшего узла заного
        node = findLowestCostNode(costs);
    }

    return costs.get('fin');
};

console.log(dijkstraAlgorithm(graph, costs, parents));
console.log(graph);
console.log(costs);
console.log(parents);
