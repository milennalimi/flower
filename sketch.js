var coiso;
function setup() {
  coiso = createSprite(200,200,20,20)
  createCanvas(400,400);
}

function draw() 
{
  background(30);
if(keyDown("up")){
  coiso.y = coiso.y -5;
}
  drawSprites()
}




