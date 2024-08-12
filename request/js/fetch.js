'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // GET

    async function getResource(url) {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `Could not fetch: ${url}, status: ${response.status}`
            );
        }
        return await response.json();
    }

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

    document.querySelector('.get').addEventListener(
        'click',
        () => {
            getResource('http://localhost:3000/people')
                .then(data => {
                    createElement(data);
                })
                .catch(e => {
                    console.error(e);
                });
            document.querySelector('.get').remove();
        },
        { once: true }
    );

    // POST - JSON:

    const form = document.querySelector('form');

    async function postResourceJSON(e, url) {
        e.preventDefault();

        const formDate = new FormData(form),
            obj = {};

        formDate.forEach((value, key) => {
            obj[key] = value;
        });

        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json; carset = utf-8' },
            body: JSON.stringify(obj),
        });

        if (!res.ok) {
            throw new Error(
                `Could not fetch: ${url}, status: ${response.status}`
            );
        }

        return await res.json();
    }

    form.addEventListener('submit', e => {
        postResourceJSON(e, 'http://localhost:3000/people')
            .then(data => console.log(data))
            .catch(e => console.error(e));
        form.reset();
    });

    // POST - PHP

    // const formForPhp = document.querySelector('form');

    // async function postResourceJSON(e, url) {
    //     e.preventDefault();

    //     const formDate = new FormData(form);

    //     const res = await fetch(url, {
    //         method: 'POST',
    //         body: formDate,
    //     });

    //     if (!res.ok) {
    //         throw new Error(
    //             `Could not fetch: ${url}, status: ${response.status}`
    //         );
    //     }

    //     return await res.text();
    // }

    // formForPhp.addEventListener('submit', e => {
    //     postResourceJSON(e, './api.php')
    //         .then(data => console.log(data))
    //         .catch(e => console.error(e));
    //     formForPhp.reset();
    // });
});
