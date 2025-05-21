const dvd = document.getElementById("head");
const counter = document.getElementById("counter");
const width = window.innerWidth;
const height = window.innerHeight;
const dvdWidth = dvd.offsetWidth;
const dvdHeight = dvd.offsetHeight;

let posX = width / 2;
let posY = height / 2;

let velY = 1;
let velX = 1;

const offset = 5;
let count = 0;

dvd.style.translate = posX + 'px ' + posY + 'px';
function step() {
    if (posX + dvdWidth >= width && velX != -1) {
        velX = -1;
        count++;
    }
    if (posX <= 0 && velX != 1) {
        velX = 1;
        count++;
    }
    if (posY + dvdHeight >= height && velY != -1) {
        velY = -1;
        count++;
    }
    if (posY <= 0 && velY != 1) {
        velY = 1;
        count++;
    }
    posX += velX * offset;
    posY += velY * offset;
    dvd.style.translate = posX + 'px ' + posY + 'px';
    counter.innerText = count;
    setTimeout(step, 50);
}
step();