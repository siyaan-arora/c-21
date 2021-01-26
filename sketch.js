var movingrect , fixedrect;
var object1 , object2;
function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(400 , 200 , 80 , 30);
  fixedrect = createSprite(400 , 200 , 80 , 30);
  object1 = createSprite(100 , 100 , 50 , 50);
  object2= createSprite(200 , 100 , 50 , 50);
  movingrect.shapeColor = "yellow";
  fixedrect.shapeColor = "yellow";
  object1.shapeColor = "yellow";
  object2.shapeColor = "yellow";
   movingrect.debug = true;
   fixedrect.debug = true;
   object1.debug = true;
   object2.debug = true;
  }




function draw() {
  background(255,255,255); 
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if(isTouching(movingrect , fixedrect)){
    fixedrect.shapeColor = "blue";
    movingrect.shapeColor = "blue";

  }
  else{
    fixedrect.shapeColor = "yellow";
    movingrect.shapeColor = "yellow";
  }

  drawSprites();
}
function isTouching(object1 , object2){
  if(object1.x-object2.x <object2.width/2+object1.width/2&&object2.x-object1.x<object2.width/2+object1.width/2&&object2.y-object1.y<object2.height/2+object1.height/2&&object1.y-object2.y<object2.height/2+object1.height/2){
    return true;
  }
  else{
  return false;
  } 
  

}