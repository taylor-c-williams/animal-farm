// grab DOM elements
const h1El = document.getElementById('animal-name');
const horseEl = document.getElementById('horse-image');
const dogEl = document.getElementById('dog-image');
const catEl = document.getElementById('cat-image');
const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');


// set event listeners 
horseEl.addEventListener('click', () => {
    horseSound.play();
    h1El.textContent = 'horse';
});

dogEl.addEventListener('click', () => {
    dogSound.play();
    h1El.textContent = 'dog';
});

catEl.addEventListener('click', () => {
    catSound.play();
    h1El.textContent = 'cat';

});


document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
        catSound.play();
    }
    if (event.key === 'd') {
        dogSound.play();
    }
    if (event.key === 'h') {
        horseSound.play();
    }
});