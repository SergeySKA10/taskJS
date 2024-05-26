'use strict';

// task: Написать парсер, который будет брать со страницы все заголовки и отправлять их на сервер (в качестве сервера исп. jsonplaceholder)

const body = document.querySelector('body'),
        textNodes = [];

function recursy(element) {
    element.childNodes.forEach(node => {
        if(node.nodeName.match(/^H\d/)) {
            const obj = {
                header: node.nodeName,
                content: node.textContent
            }
            textNodes.push(obj);
        } else {
            recursy(node);
        }
    });
}

recursy(body);

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(textNodes)
})
.then(response => response.json())
.then(json => console.log(json));
