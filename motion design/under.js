let x1, x2; 
let speed1 = 2; 
let speed2 = 1.5; 

function setup() {
  createCanvas(800, 400); 
  x1 = width; 
  x2 = width - 100; 
}

function draw() {
  background(240); 

  
  fill(0, 0, 255);
  noStroke();
  ellipse(x1, height / 2, 50, 50);

  
  fill(255, 0, 0);
  ellipse(x1,5 , height / 2, 50, 50);

  
  x1 -= speed1;
  x2 -= speed1;

  
  if (x1 < -50) {
    x1 = width;
  }

  if (x2 < -50) {
    x2 = width;
  }
}