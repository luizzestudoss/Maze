let img;

function preload() {
    img = loadImage("assets/Sprites/Chest.png");
}

function setup() {
    createCanvas(400, 400); // Adiciona um canvas para desenhar a imagem
}

function draw() {
    background(220); // Adiciona um fundo
    image(img, 0, 0);
    console.log("working");
}
