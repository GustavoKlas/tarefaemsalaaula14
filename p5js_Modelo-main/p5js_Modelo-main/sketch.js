var bola ={
posx:200,
posy:350,
cor: "yellow"
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(bola.posx,bola.posy,10, 50)
  fill(bola.cor)
}