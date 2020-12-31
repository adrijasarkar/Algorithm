//class 20
//design of algorithm

//variables
 var box1,box2

//setup
function setup() {
  createCanvas(800,400);
  
  box1= createSprite(400, 200, 50, 50);
  box1.shapeColor="cyan"
  box1.debug = true
  
  box2=createSprite(300,200,60,60)
  box2.shapeColor="pink"
  box2.debug = true
  
}


//draw
function draw() {
  background(5);  
  
  //move with mouse
  box1.x = mouseX
  box1.y = mouseY

  /*
  if(box1.isTouching(box2)){
    box2.shapeColor="white"
    box1.shapeColor="white"
  }
  else{
    box1.shapeColor="cyan"
    box2.shapeColor="pink"
  }
  */

  //making our own isTouching() algorithm
  //distance is calculated
  console.log(box1.x - box2.x)
  console.log(box1.width/2 + box2.width/2)


if(box1.x - box2.x <box1.width/2 + box2.width/2
   && box2.x - box1.x <box1.width/2 + box2.width/2 
   && box1.y - box2.y <box1.height/2 + box2.height/2
   && box2.y - box1.y <box1.height/2 + box2.height/2 ){
  box2.shapeColor="white"
  box1.shapeColor="white"
}
else{
  box1.shapeColor="cyan"
  box2.shapeColor="pink"
}


  drawSprites();
}


