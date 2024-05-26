'use strict';

// used setInterval - движение по диагоналям

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

function myAnimation() {
    let pos = 0;
    let x = 0;
    let z = 0;
    let y = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            if (x == 300) {
                if (z == 300){
                    if (y == 300) {
                        clearInterval();
                    } else {
                        y++;
                        box.style.top = 300 - y + 'px';
                    }
                } else {
                    z++;
                    box.style.left = 300 - z + 'px';
                    box.style.top = z + 'px';
                }
            } else {
                x++;
                box.style.top = 300 - x + 'px';
            }
        } else {
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }
   
    }
}


// used setInterval при нажатии на квадрат - движение снизу вверх


function myAn() {
    const box = document.querySelector('.box');
    let pos = 300;
    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 0) {
            clearInterval();
        } else {
            pos--;
            box.style.top = pos + 'px';
        }
    }
}
btn.addEventListener('click', myAnimation);
box.addEventListener('click', myAn);



// used requetAnimationFrame

const btnAnimation = document.querySelector('#btn'),
      boxAnimation = document.querySelector('#box');

let count = 0,
    ring = 0;


let id = () => requestAnimationFrame(squareAnimation); // создание id для Анимации, можно использовать для cancelAnimationFrame(id)



function squareAnimation() {
    count++;
    ring += 0.2;
    boxAnimation.style.top = count + 'px';
    boxAnimation.style.left = count + 'px';
    squareAround();
    if (count > 150) {
        boxAnimation.style.backgroundColor = 'red';
    }
    if (count < 300) { 
        requestAnimationFrame(squareAnimation);
    } else {
        squareBack();
    }
    
}

function squareBack() {
    count--;
    ring -= 0.2;
    boxAnimation.style.top = count + 'px';
    boxAnimation.style.left = count + 'px';
    squareAround();
    if (count < 150) {
        boxAnimation.style.backgroundColor = 'blue';
    }
    if (count > 0) {
        requestAnimationFrame(squareBack);
    }
}

function squareAround() {
    boxAnimation.style.borderRadius = `${ring}px`;
    if(ring) {
        requestAnimationFrame(squareAround);
    }
}

btnAnimation.addEventListener('click', () => requestAnimationFrame(squareAnimation));


// used animation();

const square = document.querySelector('#square'),
      button = document.querySelector('#button');


button.addEventListener('click', () => {
    square.animate([
        { transform: "rotate(0) scale(1) translateX(0px) translateY(0px)", borderRadius: "0px", backgroundColor: "blue" },
        { transform: "translateX(150px) translateY(150px)", backgroundColor: "yellow" },
        { transform: "rotate(360deg) scale(0)" ,borderRadius: "100px", backgroundColor: "blue", opacity: '0.05' },
        { transform: " rotate(0) scale(1) translateX(150px) translateY(150px)", borderRadius: "50px", backgroundColor: "red"},
        { transform: " translateX(0px) translateY(0px)", borderRadius: "0px", backgroundColor: "blue"},
       
    ], {
        duration: 3000,
        iterations: 1,
    });
})

