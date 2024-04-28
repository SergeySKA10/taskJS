'use strict';

// task:
// Сделать вывод в консоль линейным т.е в консоль был вывод по порядку - start, loading, finish 1 и finish 2
// Менять местами участки кода нельзя, изменять время в setTimeout нельзя

// исходный код: 

/*console.log('Start');
const alo = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Loading...');
        resolve();
    },2000);
}).then(()=>{
    setTimeout(()=>{
        console.log('Finish1');
    },2000);
}).then(()=>{
    setTimeout(()=>{
        console.log('Finish2');
    },1000);
});*/




console.log('Start');
const alo = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Loading...');
        resolve();
    },2000);
}).then(()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Finish1');
            resolve();
        },2000);
    });
}).then(()=>{
    setTimeout(()=>{
        console.log('Finish2');
    },1000);
});