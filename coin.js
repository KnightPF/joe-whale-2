//same basic code as the dolphins, only formed into a coin.
class Coin {
  constructor() {
    this.r = 40;
    this.x = width;
    this.y = random(10,350);
  }
  move() {
    this.x -= 7;
  }
  
  show() {
    
    image(cImg,this.x, this.y, this.r, this.r);
    noStroke();
    noFill();
    ellipseMode(CORNER);
    ellipse(this.x, this.y, this.r);
    
  }
}
