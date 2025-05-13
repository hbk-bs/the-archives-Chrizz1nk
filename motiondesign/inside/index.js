
let radiusGroßerKreis = 150; 
let radiusKleinerKreis = 20; 
let winkel = 0; 
let geschwindigkeit = 0.05;

let x, y;
let geschwX = 2;
let geschwY = 2; 

function setup() {
  createCanvas(400, 400);
  
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(255);

  
  let centerX = width / 2;
  let centerY = height / 2;

  
  noFill();
  stroke(0);
  ellipse(centerX, centerY, radiusGroßerKreis * 2, radiusGroßerKreis * 2);

  
  x += geschwX;
  y += geschwY;

  
  let distToCenter = dist(centerX, centerY, x, y);
  if (distToCenter + radiusKleinerKreis > radiusGroßerKreis) {
   
    geschwX = -geschwX;
    geschwY = -geschwY;
  }

  
  fill(0);
  noStroke(0);
  ellipse(x, y, radiusKleinerKreis * 2, radiusKleinerKreis * 2);
}