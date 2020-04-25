var bullet1, bullet2, bullet3, dent;
var wall1;
var wall2;
var wall3;
function setup() {
  createCanvas(1600,400);
  bullet1=createSprite(200, 200, 50, 50);
  bullet1.shapeColor="black";
  bullet2=createSprite(200, 275, 50, 50);
  bullet2.shapeColor="black";
  bullet3=createSprite(200, 350, 50, 50);
  bullet3.shapeColor="black";
  wall1 = createSprite(600, 175, 22, 75);
  wall2 = createSprite(600, 250, 25, 75);
  wall3 = createSprite(600, 325, 83, 75);
}

function draw() {
  background(255,255,255);
  bullet1.speed=321;
  bullet1.weight=52;
  bullet1.velocityX=60;
  bullet1.dent=(1/2*bullet1.weigth*bullet1.speed*bullet1.speed)/wall1.width*wall1.width*wall1.width;
  bullet2.speed=321;
  bullet2.velocityX=30;
  bullet2.dent=(1/2*bullet2.weigth*bullet2.speed*bullet2.speed)/wall2.width*wall2.width*wall2.width;
  bullet3.speed=223;
  bullet3.velocityX=30;
  bullet3.dent=(1/2*bullet3.weigth*bullet3.speed*bullet3.speed)/wall3.width*wall3.width*wall3.width;
  if (bullet1.dent>=10) {
      wall1.shapeColor="red"
  } else {
    wall1.shapeColor="green"
  }
  if (bullet2.dent>=10) {
    wall2.shapeColor="red"
} else {
  wall2.shapeColor="green"
}
if (bullet3.dent>=10) {
  wall3.shapeColor="red"
} else {
wall3.shapeColor="green"
}
  drawSprites();
}