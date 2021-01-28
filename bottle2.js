//gameplay 2 class for bottle objects, made different by changing rng for spawns.
class Plastic2 {
  constructor() {
    this.r = 40;
    this.x = width;
    this.y = random(165,350);
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
