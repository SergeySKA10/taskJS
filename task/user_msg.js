'use strict';

// Задача: есть код (ниже), который в определенный момент делает 3 запроса на сервер,
// чтобы отобразить информацию из 3х разных источников в интерфейсе. Пока вместо интерфейса можно использовать консоль.

//  Необходимо организовать его так, чтобы в консоль ВСЕГДА выводилось полное сообщение,
// без пустых данных. Сервера могут отвечать с разной задержкой. 

//  При этом, есть условие на вывод сообщения в переменной msg - нам его критически важно отобразить как можно быстрее,
// поэтому мы пробуем получить его с двух разных серверов. Необходимо отобразить первый полученный результат

// let user;
// let msg;

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => response.json())
//   .then((json) => (user = json.name));

// fetch("https://jsonplaceholder.typicode.com/comments/3")
//   .then((response) => response.json())
//   .then((json) => (msg = json.body));

// fetch("https://loripsum.net/api/1/short/headers/plaintext")
//   .then((response) => response.text())
//   .then((text) => (msg = text));

// console.log(`${user} told me once: ${msg}`);


let user;
let msg;

const responseUserName = fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((json) => (user = json.name));

const commentUserMsg = fetch("https://jsonplaceholder.typicode.com/comments/3")
    .then((response) => response.json())
    .then((json) => (msg = json.body));

const plaintextUserMsg = fetch("https://loripsum.net/api/1/short/headers/plaintext")
    .then((response) => response.text())
    .then((text) => (msg = text));

Promise.all([responseUserName, Promise.race([commentUserMsg, plaintextUserMsg])])
.then(() => {
    console.log(`${user} told me once: ${msg}`);
});




  




