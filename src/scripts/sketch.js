let xoff = 0.0;
let num = 12;

function setup() {
  createCanvas(windowWidth/2, windowHeight);
}

function draw() {
    background(0);
    noFill();
    // blendMode(HARD_LIGHT);
    let colorMap = map(sin(xoff), -1, 1, 0, 255);
    stroke(colorMap,0,255);
    strokeWeight(3);
    
    for (let i = 0; i < num; i++){

      beginShape();
    
      let yoff = 0;
    
      for (let y = 0; y <= (windowHeight+20); y += 20) {
        
        let noiseVar = map(noise(yoff, xoff/2), 0, 1, 250, 400);

        let x = (sin((xoff+i*.2) + (yoff * 4))*50) + noiseVar;

        vertex(x+(i*10), y);

        yoff += 0.02;
      }

      xoff += 0.0003;

      vertex(-10, windowHeight+10);
      vertex(-10, -10);
      vertex(200, -10);
      endShape(CLOSE);
    }
  
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    yvalues = new Array(floor(windowWidth / dotSpacing));

  }

// new p5(sketch, 'p5-canvas');

export default sketch