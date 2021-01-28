//joe whale saves the sea, a combination of the original joe whale game and extra code.
//NOTABLE THINGS:
//-completely unsure of how to stop the coins from accelerating continuously.
//-not sorry for the broken hitbox mechanic
//-a good amount of this code was inspired by a video from "The Coding Train", link: https://www.youtube.com/watch?v=l0HoJHc-63Q&t=1470s
//-that is also to note a good amount of the code was edited, along with some modifications and additions of my own, such as the scene functions and the score.

//introduction of the variables
let whale;
let wImg;
let tImg;
let bImg;
let cImg;
let dolphins = [];
let coins = [];
let bottles = [];
let score = 0;
let currentScene = 0;
let dolph = 0;
let whale2;
let bottlescollect = 0; 
let mines = [];
let bottles2 =[];

//function that preloads images into their respective variables.
function preload(){
  bImg = loadImage('background.gif');
  wImg = loadImage('whale.png');
  dImg = loadImage('dolphin.png');
  cImg = loadImage('money.gif');
  pImg = loadImage('bottle.png');
  b2Img = loadImage('background2.gif');
  w2Img = loadImage('whale2.png');
  mImg = loadImage('mine.png');
}

function setup() {
  createCanvas(800, 400);
  whale = new Whale(); 
  whale2 = new Whale2();
}

function keyPressed(){
  if (key == ' '){
    whale.jump();
    whale2.jump();
  }
}

//title scene, gives slight instructions as well as title and disclaimer. nothing too fancy.
var scene0 = function (){
  background(90, 110, 230);
  textSize(50);
  text('joe whale saves the sea', 120, 170);
  textSize(20);
  text('press x to play endless mode', 245, 230);
  text('press space to jump',285,270);
  text('press y to play story mode', 260, 310)
  text('(disclaimer: not sorry for the hitboxes)', 215, 370)
}

//gameplay scene for endless mode, calls functions to allow spawning of dolphins and coins, as well as summoning the whale.
var scene1 = function (){
  if (random(1) < 0.023) {
    dolphins.push(new Dolphin ());
  }
  
  if (random(1) < 0.015) {
    coins.push(new Coin());
  } 
  
  if (frameCount % 20 == 0 && score > 0) {
  score++;
  }else{
  score++;
  }
  fill(0)
  background(bImg);
  text('Score: '+(score),20,30);
  
  
  for (let d of dolphins) {
    d.move();  
    d.show();
    if (whale.hits(d)) {
    currentScene++;
    }
  }
  for (let c of coins) {
    c.move();
    c.show();
    if (whale.hits(c)) {
      score = score+100;
      c.y = 400;
    }
  }
  whale.show();
  whale.move();
}

//losing scene for endless mode, displays score and how to restart
var scene2 = function (){
  background(90, 110, 230);
  fill(0);
  textSize(50);
  text('game over', 260, 170);
  textSize(25);
  text('your score was: '+(score), 270, 230);
  text('reload to restart', 285, 300);
}

//gameplay scene 1 for story mode, where you avoid plastic and save dolphins.
var scene3 = function(){
  if (random(1) < 0.023) {
    dolphins.push(new Dolphin ());
  }
  
  if (random(1) < 0.015) {
    bottles.push(new Plastic());
  } 
  fill(0)
  background(b2Img);
  text('Dolphins saved: '+(dolph), 20, 30);
  
  for (let d of dolphins) {
    d.move();  
    d.show();
    if (whale.hits(d)) {
      dolph = dolph+1;
      score = score+100;
      d.y=400;
    }
  }
  for (let b of bottles) {
      b.move();
      b.show();
      if (whale.hits(b)) {
        currentScene+=2;
    }
  }
  whale.show();
  whale.move();
  if (dolph === 20){
      currentScene+=1;
    }
}

//end scenes for story gameplay 1
var scene4 = function(){
  background(90, 110, 230);
  fill(0);
  textSize(50);
  text('good job', 280, 170);
  textSize(25);
  text('you saved the dolphins', 270, 230);
  text('press y to continue', 285, 300);
}
var scene5 = function(){
  background(90, 110, 230);
  fill(0);
  textSize(50);
  text('oh no', 310, 170);
  textSize(25);
  text('you got caught in some plastic', 230, 230);
  text('reload to restart', 295, 300);
}

//start scene for story gameplay 1
var scene6 = function(){
  background(90, 110, 230);
  fill(0);
  textSize(50);
  text('to win', 310, 170);
  textSize(25);
  text('rescue the dolphins', 275, 230);
  text('avoid the plastic', 290, 270);
  text('press q to start', 300, 350);
}

//gameplay scene 2 for story mode, where you collect bottles and avoid mines.
var scene7 = function(){
  
  if (random(1) < 0.01) {
    bottles2.push(new Plastic2());
  } 
  
  if (random(1) < 0.0125) {
    mines.push(new Mine());
  }
  
  fill(0)
  background(b2Img);
  text('Bottles collected: '+(bottlescollect), 20, 30);
  
  for (let b2 of bottles2) {
      b2.move();
      b2.show();
      if (whale2.hits(b2)) {
        bottlescollect++;
        b2.y=500;
    }
  }
  
  for (let m of mines) {
      m.move();
      m.show();
      if (whale2.hits(m)) {
        currentScene = 9;
    }
  }
  
  whale2.show();
  whale2.move();
  if (bottlescollect === 20){
      currentScene = 10;
    }
}

//start scene for story gameplay 2
var scene8 = function(){
  background(90, 110, 230);
  fill(0);
  textSize(50);
  text('joe is tired of plastic', 180, 170);
  textSize(25);
  text('make joe collect the plastic', 245, 230);
  text('avoid the mines', 290, 270);
  text('press q to start', 300, 350);
}

//ending scenes for story gameplay 2
var scene9 = function(){
  background(90, 110, 230);
  fill(0);
  textSize(50);
  text('you hit a mine', 230, 170);
  textSize(25);
  text('reload and press p to play again', 220, 230);
}
var scene10 = function(){
  background(90, 110, 230);
  fill(0);
  textSize(50);
  text('you saved the seas', 180, 170);
  textSize(25);
  text('reload if you want to play again', 220, 230);
  text('try endless mode', 290, 270);
}


//draw function, calls scene functions respectively.
function draw() {
  if (currentScene === 0){
     scene0();
    if (key == 'x'){
      currentScene = 1;
    }
    if (key == 'y'){
      currentScene = 6;
    }
    //secret p key to advance straight to story level 2, shown in losing end of story 2 but also easily exploitable for speedruns.
    if (key == 'p'){
      currentScene = 8;
    }
  }

  if (currentScene === 1){
        scene1();
  }

  if (currentScene === 2){
    scene2();
  }

  if (currentScene === 3){
    scene3();
  }
  
  if (currentScene === 4){
    scene4();
    if (key == 'y'){
      currentScene=8;
    }
  }
  
  if (currentScene === 5){
    scene5();
  }
  if (currentScene === 6){
    scene6();
    if (key == 'q'){
      currentScene = 3;
    }
  }
  if (currentScene === 7){
    scene7();
  }
  if (currentScene === 8){
    scene8();
    if (key == 'q'){
      currentScene = 7;
    }
  }
  if (currentScene == 9){
    scene9();
  }
  if (currentScene === 10){
    scene10();
  }
}
