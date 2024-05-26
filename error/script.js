'use strict';

// Task: При отсутсвии id оповещать пользователя об ошибке - отсутствие id у элемента
/*
const data = [
    {
        id: '1',
        tag: 'div',
        class: 'box'
    },
    {
        id: '',
        tag: 'nav',
        class: 'box'
    },
    {
        id: '3',
        tag: 'div',
        class: 'box'
    }
]

data.forEach(blockObj => {
    const block = document.createElement(blockObj.tag);
    block.setAttribute('id', blockObj.id);
    document.body.append(block);
})
*/

const data = [
    {
        id: '1',
        tag: 'div',
        class: 'box'
    },
    {
        id: '',
        tag: 'nav',
        class: 'box'
    },
    {
        id: '3',
        tag: 'div',
        class: 'box'
    }
]

class ValidationError extends Error {
    conctructor(message) {
        supper(message);
        this.name = 'ValidationError';
    }
}

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
        block.setAttribute('class', blockObj.class);
    
        if (!blockObj.id) throw new ValidationError(`Ошибка валидации: у блока ${i + 1} отсутствует id`);
        
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    })
} catch(e) {
    if (e instanceof ValidationError) {
        console.error(e.stack);
    } else {
        throw e;
    }
}


console.log('Continue code...');