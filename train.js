//The initial code I used had this set of code as well as the image set to a train, but I changed it to a dolphin. This is why the file name is "train.js".
class Dolphin {
  constructor() {
    this.r = 75;
    this.x = width;
    this.y = random(10,350);
  }
  move() {
    this.x -= 7;
  }
  
  show() {
    
    image(dImg,this.x, this.y, this.r, this.r);
    fill(255,70);
    noStroke();
    noFill();
    ellipseMode(CORNER);
    ellipse(this.x, this.y, this.r, this.r);
  }
}
