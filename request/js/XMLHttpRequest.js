'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // GET

    function createElement(data) {
        data.forEach(person => {
            const card = document.createElement('div');
            let icon;

            if (person.sex === 'male') {
                icon = 'icons/mars.png';
            } else {
                icon = 'icons/female.png';
            }

            card.classList.add('card');
            card.innerHTML = `
				<img src="${person.photo}" alt="photo">
				<div class="name">${person.name} ${person.surname}</div>
				<div class="sex">
					<img src="${icon}" alt="male">
				</div>
				<div class="age">${person.age}</div>
			`;
            document.querySelector('.people').append(card);
        });
    }

    function getPersons() {
        const request = new XMLHttpRequest();

        request.open('GET', 'http://localhost:3000/people');
        request.setRequestHeader(
            'Content-type',
            'application/json; carset = utf-8'
        );
        request.send();

        request.addEventListener('load', () => {
            if (request.status == 200) {
                const data = JSON.parse(request.response);
                createElement(data);
            } else {
                console.error(
                    `Произошла ошибка: ${request.status}: ${request.statusText}`
                );
            }
        });

        this.remove();
    }

    document
        .querySelector('.get')
        .addEventListener('click', getPersons, { once: true });

    // POST - JSON

    const form = document.querySelector('form');

    function postResourceJSON(e, url) {
        e.preventDefault();

        const req = new XMLHttpRequest();

        req.open('POST', url);
        req.setRequestHeader(
            'Content-type',
            'application/json; carset = utf-8'
        );

        const formDate = new FormData(form),
            obj = {};

        formDate.forEach((value, key) => {
            obj[key] = value;
        });

        req.send(JSON.stringify(obj));

        req.addEventListener('load', () => {
            if (req.status >= 200 && req.status < 300) {
                const data = JSON.parse(req.response);
                console.log(data);
                form.reset();
            } else {
                console.error(
                    `Произошла ошибка: ${req.status}: ${req.statusText}`
                );
            }
        });
    }

    form.addEventListener('submit', e => {
        postResourceJSON(e, 'http://localhost:3000/people');
    });

    // POST - PHP

    // const formForPHP = document.querySelector('form');

    // function postResourcePHP(e, url) {
    //     e.preventDefault();

    //     const req = new XMLHttpRequest();
    //     req.open('POST', url);

    //     const formDate = new FormData(form);

    //     req.send(formDate);

    //     req.addEventListener('load', () => {
    //         if (req.status >= 200 && req.status < 300) {
    //             console.log(req.response);
    //             formForPHP.reset();
    //         } else {
    //             console.error(
    //                 `Произошла ошибка: ${req.status}: ${req.statusText}`
    //             );
    //         }
    //     });
    // }

    // formForPHP.addEventListener('submit', e => {
    //     postResourcePHP(e, './api.php');
    // });
});
