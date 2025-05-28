const images = ["sebsmirk.png", "tuffchris.png", "marco.png", "carloo.png", "german.png"];

const randomNum = Math.floor(Math.random() * images.length);
const chosenImage = images[randomNum];

document.getElementById("cornerImg").setAttribute("src", "images/" + chosenImage);