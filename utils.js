
// this file is for declaring functions. we also need to grab some DOM, because the functions depend on it. (they are impure)

// declaration -- writing recipe
const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');
const h1El = document.getElementById('animal-name');

export function makeSoundAndChangeH1ForHorse() {
    horseSound.play();
    h1El.textContent = 'horse';
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/e6/3f/ac/e63fac00637cce9fb90d67683d3b5e9c.jpg') ";
    // no return value needed. We don't need to store anything in a variable to use later
    // this is an IMPURE function. It has no arguments, not return value, and SIDE EFFECTS (mutations outside of the function)
}

export function makeSoundAndChangeH1ForDog() {
    dogSound.play();
    h1El.textContent = 'dog';
    document.body.style.backgroundImage = "url('https://i0.wp.com/dailydot.com/wp-content/uploads/692/91/5f3554c793183fa4176cd2de936c83c5.jpg') ";
}

export function makeSoundAndChangeH1ForCat() {
    catSound.play();
    h1El.textContent = 'cat';
    document.body.style.backgroundImage = "url('https://catdolls.weebly.com/uploads/1/0/9/6/109685771/texas-ragdoll-kittenberry-castle-website-cats-kittens-persian-himalayan-23_orig.jpg') ";
}

export function reset() {
    h1El.textContent = 'Who is your BFF?';
    document.body.style.backgroundImage = "url('https://cdn.wallpapersafari.com/26/51/PDOjt4.jpg') ";
}