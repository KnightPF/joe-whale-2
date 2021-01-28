//The initial code I used had this set of code as well as the image set to a unicorn, but I changed it to a whale. This is why the file name is "unicorn.js".
class Whale {
  constructor() {
    this.r = 50;
    this.x = 40;
    this.y = height - 50
    this.vy = 0;
    this.gravity = 0.8;
  }
  
  show() {
    image(wImg,this.x, this.y, 130, 50);
    noStroke();
    noFill();
    ellipseMode(CORNER);
    ellipse(this.x, this.y, 130, 50);
    
  }
  
  jump() {
    this.vy = -10;
  }
  
  hits(train) {
    
    let x1 = train.x+train.r*0.5;
    let y1 = train.y+train.r*0.5;
    
    //turning things into circles was an attempt at fixing the hitboxes, worked a little bit but not much.
    return collideRectCircle(this.x, this.y, this.r, this.r, x1, y1, train.r);
  }
  
  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height-this.r);
  }
} 
