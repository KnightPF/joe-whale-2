//gameplay 1 class for bottle objects.
class Plastic {
  constructor() {
    this.r = 40;
    this.x = width;
    this.y = random(10,350);
  }
  move() {
    this.x -= 7;
  }
  
  show() {
    
    image(pImg,this.x, this.y, this.r, this.r);
    noStroke();
    noFill();
    ellipseMode(CORNER);
    ellipse(this.x, this.y, this.r);
    
  }
}
