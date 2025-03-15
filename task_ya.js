class Traffic {
    constructor(initialSignal, trafficLightController) {
        this.currentSignal = initialSignal;

        trafficLightController.subscribe((currentSignal) => {
            // Регулировщик сменил сигнал
            this.currentSignal = currentSignal;
        });
    }

    async go(direction) {
        // Вернуть промис, который зарезолвится, когда можно будет проехать в переданном направлении.
        return await new Promise((resolve, reject) => {
            if (
                (direction === 'FORWARD' && this.currentSignal === 'GREEN') ||
                direction === this.currentSignal
            ) {
                resolve();
            } else if (direction === 'LEFT' && this.currentSignal === 'GREEN') {
                resolve();
            } else {
                reject();
            }
        });
    }
}

// exports.Traffic = Traffic;

console.log(
    new Traffic('RED', trafficLightController.subscribe('GREEN')).go('FORWARD')
);

// exports.Traffic = Traffic;

const createSelector = (selector) => {
    return (state, params) => {
        console.log(selector);
    };
};

const selector = (arg) => arg;

console.log(createSelector(selector('Hello World'))());

const items = [
    [1, 2],
    [3, 2],
    [2, 4],
    [5, 6],
    [3, 5],
];
const requests = [1, 2, 3, 4, 5, 6];

var maximumBeauty = function (items, queries) {
    const res = [];

    queries.forEach((el) => {
        let maxPrice = 0;
        items.forEach((item) => {
            if (item[0] <= el) {
                maxPrice = Math.max(maxPrice, item[1]);
            }
        });

        res.push(maxPrice);
    });

    return res;
};

console.log(maximumBeauty(items, requests));

const str = '2025-01-13';

const ms = Date.parse(str);
console.log(ms, 'ms');

const date = new Date(ms);
console.log(date, 'date');

function sum(N, staff, K) {
    const qSort = (arr) => {
        if (arr.length <= 1) {
            return arr;
        }

        const support = arr[0],
            smallerElem = [],
            biggerElem = [];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < support) {
                smallerElem.push(arr[i]);
            } else {
                biggerElem.push(arr[i]);
            }
        }

        return [...qSort(biggerElem), support, ...qSort(smallerElem)];
    };

    if (K <= 0 || N === 0) {
        return 0;
    } else if (K >= N) {
        return staff.reduce((sum, el) => (sum += el), 0);
    } else {
        return qSort(staff)
            .slice(0, K)
            .reduce((sum, el) => (sum += el), 0);
    }
}

console.log(sum(8, [5, 13, 8, 4, 4, 15, 1, 9], 8));

// подсчет суммы самых больших элементов в массиве в зависимости от указанного количества выборки
// N - количество сотрудников staff - массив этих сотрудников со skills K - количество имеющихся компьютеров
const sumBigElementArray = (N, arr, K) => {
    let sum = arr[0];
    let res = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (res.length < K) {
            console.log(arr[i], '0');
            for (let j = 0; j < res.length; j++) {
                if (arr[i] < res[0]) {
                    // console.log(arr[i], '01');
                    res.unshift(arr[i]);
                    sum += arr[i];
                    break;
                } else if (arr[i] <= res[j]) {
                    // console.log(arr[i], '2');
                    res = res.slice(0, j).concat(arr[i], ...res.slice(j));
                    sum += arr[i];
                    break;
                }

                if (j === res.length - 1 && arr[i] > res[j]) {
                    // console.log(arr[i], '3');
                    sum += arr[i];
                    res.push(arr[i]);
                    break;
                }
                // console.log(res);
            }
        } else {
            console.log('go', arr[i]);

            if (arr[i] < res[0]) {
                continue;
            } else {
                sum = sum - res[0] + arr[i];
                for (let j = 0; j < res.length; j++) {
                    if (arr[i] <= res[j]) {
                        res = res.slice(1, j).concat(arr[i], ...res.slice(j));
                        break;
                    }

                    if (j === res.length - 1 && arr[i] > res[j]) {
                        res.push(arr[i]);
                        res.shift();
                    }
                }
            }
            // console.log(res);
        }
    }
    // console.log(res);
    return sum;
};

console.log(
    sumBigElementArray(11, [22, 7, 24, 24, 11, 22, 24, 3, 9, 16, 2, 19], 7)
);

// 24 24 24 22 22 19 16
