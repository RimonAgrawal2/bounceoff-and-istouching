var movingrec,fixedrec;
function setup() {
  createCanvas(800,400);
  fixedrec=createSprite(400, 100, 50, 80);
  movingrec=createSprite(400,800,80,30);
  movingrec.shapeColor="green";
  fixedrec.shapeColor="green";
  movingrec.velocityY=-6;
  fixedrec.velocityY=+2;
  }

function draw() {
  background(0); 

  
drawSprites();
}