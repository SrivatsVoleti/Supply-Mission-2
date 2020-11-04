var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,groundSprite,engine,world;
var dropZoneSprite,dropZoneBody;
var dropZoneSprite_1,dropZoneSprite_2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.15;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = "BurlyWood";
 
	dropZoneSprite = createSprite(width/2 , 664 , 200, 20);
	dropZoneSprite.shapeColor = "red";

	dropZoneSprite_1 = createSprite(290,622,20,103);
	dropZoneSprite_1.shapeColor = "red";

	dropZoneSprite_2 = createSprite(490,621,20,100);
	dropZoneSprite_2.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;
     
	packageBody = Bodies.circle(width/2 , 200 , 5);
	Matter.Body.setStatic(packageBody,true);
	World.add(world, packageBody);
	
	// ground = Bodies.rectangle(width/2, 650, width, 10);
	//  World.add(world, ground);
	 
	dropZoneBody = Bodies.rectangle(width/2 , 655 , 200 , 10 , {isStatic:true}); 
	World.add(world , dropZoneBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y
  drawSprites();
}
function keyPressed(){
	if (keyCode === DOWN_ARROW) {
		packageBody.velocityY = 1;
		Matter.Body.setStatic(packageBody,false);
	  }
}