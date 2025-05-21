const images = ["marco.png", "sebsmirk.png", "tuffchris.png", "bunny.png", "carloo.png"]

const randomNum = Math.floor(Math.random() * images.length)
const chosenImage = images[randomNum]

document.getElementById("cornerImg").setAttribute("src", "images/" + chosenImage)