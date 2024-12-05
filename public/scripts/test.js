let img;

function preload() {
    img = loadImage("assets/Sprites/Chest.png");
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    image(img, 0, 0);
    console.log("working");
}
