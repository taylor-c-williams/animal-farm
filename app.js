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
    h1El.textContent = 'horsey';
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/e6/3f/ac/e63fac00637cce9fb90d67683d3b5e9c.jpg') ";
});

dogEl.addEventListener('click', () => {
    dogSound.play();
    h1El.textContent = 'doggie';
    document.body.style.backgroundImage = "url('https://i0.wp.com/dailydot.com/wp-content/uploads/692/91/5f3554c793183fa4176cd2de936c83c5.jpg') ";
});

catEl.addEventListener('click', () => {
    catSound.play();
    h1El.textContent = 'kitty';
    document.body.style.backgroundImage = "url('https://catdolls.weebly.com/uploads/1/0/9/6/109685771/texas-ragdoll-kittenberry-castle-website-cats-kittens-persian-himalayan-23_orig.jpg') ";

});


document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
        catSound.play();
        h1El.textContent = 'kitty';
        document.body.style.backgroundImage = "url('https://catdolls.weebly.com/uploads/1/0/9/6/109685771/texas-ragdoll-kittenberry-castle-website-cats-kittens-persian-himalayan-23_orig.jpg') ";
    }
    if (event.key === 'd') {
        dogSound.play();
        h1El.textContent = 'doggie';
        document.body.style.backgroundImage = "url('https://i0.wp.com/dailydot.com/wp-content/uploads/692/91/5f3554c793183fa4176cd2de936c83c5.jpg') ";
    }
    if (event.key === 'h') {
        horseSound.play();
        h1El.textContent = 'horsey';
         document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/e6/3f/ac/e63fac00637cce9fb90d67683d3b5e9c.jpg') ";
    }
});