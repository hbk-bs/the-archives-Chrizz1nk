

let x, y;        
let dx, dy;      
let middleX;     

function setup() {
  createCanvas(600, 400);
  x = width - 25;  
  y = height / 2;  
  dx = -3;        
  dy = 0;          
  middleX = width / 2;  
}

function draw() {
  background(30);

  
  ellipse(x, y, 50, 50);
  fill("white");

  
  x += dx;
  y += dy;

  
  if (x <= middleX) {
    dx = 3;  
  }

  
  if (x >= width - 25) {
    dx = -3;  
  }
}