const images = ["bunny.png", "sebsmirk.png", "tuffchris.png", "marco.png", "carloo.png", "german.png"];

let randomNum = Math.floor(Math.random() * images.length);
const chosenImage = images[randomNum];

if (randomNum == 0) Math.floor(Math.random() * images.length);

document.getElementById("cornerImg").setAttribute("src", "images/" + chosenImage);