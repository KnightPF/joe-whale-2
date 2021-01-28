//class for mine objects
class Mine {
  constructor() {
    this.r = 150;
    this.h = 200;
    this.x = width;
    this.y = 200;
  }
  move() {
    this.x -= 7;
  }
  
  show() {
    
    image(mImg,this.x, this.y, this.r, this.h);
    noStroke();
    noFill();
    ellipseMode(CORNER);
    ellipse(this.x, this.y, this.r, this.h);
    
  }
}
