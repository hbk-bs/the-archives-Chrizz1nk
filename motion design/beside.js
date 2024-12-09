function setup() {
    createCanvas(800, 800);
    noStroke();
  }
  
  function draw() {
    background(30);
  
    let time = millis() / 1000; 
  
    // Kreis oben
    let x1 = width / 2;
    let y1 = height / 2 - 150;
    fill('white');
    ellipse(x1, y1, 100);
  
    // kreis unten
    let x2 = width / 2;
    let y2 = height / 2 + 150;
    fill('white');
    ellipse(x2, y2, 100);
  
    // bewegender kreis
    let gap = 75;
    let x3 = map(sin(time * 2), -1, 1, width / 4, 3 * width / 4);
    let y3 = height / 2;
    fill('white');
    ellipse(x3, y3, 80);
  }
  
  

