
let x1, x2; 
let speed1 = 1.5; 
let speed2 = 1.5; 

function setup() {
  createCanvas(800, 400); 
  x1 = width; 
  x2 = width - 50; 
}

function draw() {
  background(30); 

  //rechter kreis
  fill("grey");
  noStroke();
  ellipse(x1, height / 2, 50, 50);

  //linker kreis
  fill("white");
  ellipse(x2, height / 2, 50, 50);

   
  x1 -= speed1;
  x2 -= speed2;

  //reset
  if (x1 < -50) {
    x1 = width;
  }

  if (x2 < -50) {
    x2 = width;
  }
}

