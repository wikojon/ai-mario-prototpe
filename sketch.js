img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload()
{
  img = loadImage("mario05.png");
}

function setup() {
  createCanvas(650, 400);
}

function draw() {
  background("#D3D3D3");
  image(img,marioX, marioY, 40,70);
}


