const dvd = document.getElementById("head");
const width = window.innerWidth;
const height = window.innerHeight;
const dvdWidth = dvd.offsetWidth;
const dvdHeight = dvd.offsetHeight;

let posX = width / 2;
let posY = height / 2;

let velY = 1;
let velX = 1;

const offset = 5;

dvd.style.translate = posX + 'px ' + posY + 'px'; // x and y
console.log("window size: " + width + ", " + height);
function step() {
    if (posX + dvdWidth >= width) {
        velX = -1;
    }
    if (posX <= 0) {
        velX = 1;
    }
    if (posY + dvdHeight >= height) {
        velY = -1;
    }
    if (posY <= 0) {
        velY = 1;
    }
    posX += velX * offset;
    posY += velY * offset;
    dvd.style.translate = posX + 'px ' + posY + 'px';
    console.log(posX + ", " + posY);
    setTimeout(step, 50);
}
step();