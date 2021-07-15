// grab DOM elements

import { makeSoundAndChangeH1ForCat, makeSoundAndChangeH1ForDog, makeSoundAndChangeH1ForHorse, reset } from './utils.js';


const horseEl = document.getElementById('horse-image');
const dogEl = document.getElementById('dog-image');
const catEl = document.getElementById('cat-image');
const buttonEl = document.getElementById('reset');



// set event listeners 
horseEl.addEventListener('click', () => {
    makeSoundAndChangeH1ForHorse();
});

dogEl.addEventListener('click', () => {
    makeSoundAndChangeH1ForDog();
});

catEl.addEventListener('click', () => {
    makeSoundAndChangeH1ForCat();
});

buttonEl.addEventListener('click', () => {
    reset();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
        makeSoundAndChangeH1ForCat();
    }
    if (event.key === 'k') {
        makeSoundAndChangeH1ForCat();    
    }
    if (event.key === 'd') {
        makeSoundAndChangeH1ForDog(); 
    }
    if (event.key === 'h') {
        makeSoundAndChangeH1ForHorse();
    }

    if (event.key === 'r') {
        reset();
    }
});

