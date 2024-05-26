//Задача: сделать вывод в консоль линейным: Start, Loading, Finish1, Finish2

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
    setTimeout(()=>{
        console.log('Finish1');
    },2000);
}).then(()=>{
    setTimeout(()=>{
        setTimeout(()=>{
            console.log('Finish2');
        },2000);
    },1000);
});