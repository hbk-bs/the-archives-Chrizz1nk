let x1, x2; // Positionen der Kreise
let speed1 = 2; // Geschwindigkeit von Kreis 1
let speed2 = 1.5; // Geschwindigkeit von Kreis 2

function setup() {
  createCanvas(800, 400); // Setzt die Größe des Canvas
  x1 = width; // Kreis 1 startet rechts
  x2 = width - 100; // Kreis 2 startet ebenfalls rechts, aber etwas links von Kreis 1
}

function draw() {
  background(240); // Hintergrundfarbe

  // Zeichne den ersten Kreis (blau)
  fill(0, 0, 255);
  noStroke();
  ellipse(x1, height / 2, 50, 50);

  // Zeichne den zweiten Kreis (rot)
  fill(255, 0, 0);
  ellipse(x1,5 , height / 2, 50, 50);

  // Bewege die Kreise nach links
  x1 -= speed1;
  x2 -= speed1;

  // Wenn die Kreise den Bildschirm verlassen haben, setze sie wieder nach rechts zurück
  if (x1 < -50) {
    x1 = width;
  }

  if (x2 < -50) {
    x2 = width;
  }
}