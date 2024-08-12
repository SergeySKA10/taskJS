'use strict';

window.addEventListener('DOMContentLoaded', () => {
    //GET

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

    document.querySelector('.get').addEventListener('click', () => {
        axios
            .get('http://localhost:3000/people')
            .then(data => {
                createElement(data.data);
            })
            .finally(() => {
                document.querySelector('.get').remove();
            });
    });

    // POST - JSON:

    const form = document.querySelector('form');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(form),
            obj = {};

        formData.forEach((value, key) => {
            obj[key] = value;
        });

        axios
            .post('http://localhost:3000/people', obj)
            .then(data => console.log(data.data));
        form.reset();
    });

    // POST - PHP

    // const formFromPhp = document.querySelector('form');

    // formFromPhp.addEventListener('submit', e => {
    //     e.preventDefault();
    //     const formData = new FormData(form);

    //     axios.post('./api.php', formData).then(data => console.log(data.data));
    //     formFromPhp.reset();
    // });
});
