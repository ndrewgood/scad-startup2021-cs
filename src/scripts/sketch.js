const containerElement = document.getElementById('p5-canvas');



import p5 from 'p5';

const sketch = (p) => {

  let xoff = 0.0;
  let num = 16;

  p.setup = function() {
    if (p.windowWidth >= 900){
      p.createCanvas(p.windowWidth/2, p.windowHeight);
      window.devicePixelRatio=1;
    } else {
      p.createCanvas(p.windowWidth, p.windowHeight*.7);
      window.devicePixelRatio=2;
    }
    
    
  }

  p.draw = function() {
    let xMobileOff = 0;

    if (p.windowWidth <= 900){
      xMobileOff = 150;
    } else {
      xMobileOff = 0;
    }
      
      p.noFill();
      p.background(30);
      // p.blendMode(p.ADD);
      
      let colorMap = p.map(p.sin(xoff*1.5), -1, 1, 0, 255);
      p.stroke(colorMap,0,255, 200);
      p.strokeWeight(3);
      
      for (let i = 0; i < num; i++){

        p.beginShape();
      
        let yoff = 0;
      
        for (let y = 0; y <= (p.windowHeight+25); y += 25) {
          
          let noiseVar = p.map(p.noise(yoff, xoff/2), 0, 1, (p.windowWidth/4)-100, (p.windowWidth/4));

          let x = (p.sin((xoff+i*.15) + ((yoff * 4)))*60) + noiseVar + xMobileOff;

          p.vertex(x+(i*10), y);

          yoff += 0.02;
        }

        xoff += 0.0003;

        p.vertex(-10, p.windowHeight+10);
        p.vertex(-10, -10);
        p.vertex(200, -10);
        p.endShape("CLOSE");
      }
    
  }

  p.windowResized = function() {
    if (p.windowWidth >= 900){
      p.resizeCanvas(p.windowWidth/2, p.windowHeight);
    } else {
      p.resizeCanvas(p.windowWidth, p.windowHeight*.7);
    }    }
}

new p5(sketch, containerElement);
