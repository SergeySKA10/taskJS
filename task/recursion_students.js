'use strict';

let students = {
    english: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Piter',
        progress: 60
    }],

    japanese: {
        basic: [{
            name: 'Ivan',
            progress: 35 
        }, {
            name: 'Ann',
            progress: 40
        }],

        pro: [{
            name: 'Sam',
            progress: 18 
        }]
    }
}


function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);

            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const totalProgressStudent = getTotalProgressByRecursion(students);

const result = totalProgressStudent[0] / totalProgressStudent[1];

console.log(result);

