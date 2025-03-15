const str = 'hello world';

const getLucky = function(s, k) {
    const sum = s.replace(/[a-z]/gi, function(el) {
        return el.charCodeAt(0) - 96;
    })
    .split('')
    .reduce((sum, el) => sum + +el, 0);

    let num = 0;
    

    if (k === 1) {
        num = sum;
    } else {
        num = getLucky(sum + '', k - 1);
    }

    return num;
};

// const getLucky = function(s, k) {
//     const sum = s.replace(/[a-z]/gi, function(el) {
//         return el.charCodeAt(0) - 96;
//     })
//     .split('')
//     .reduce((sum, el) => sum + +el, 0);

//     let num = 0;
    

//     for (let i = 0; i < k; i++) {
//         if (i == 0) {
//             num = sum;
//         } else {
//             num = (num + '').split('').reduce((sum, el) => sum + +el, 0);
//         }
//     }

//     return num
// };


// console.log(getLucky(str, 100));