var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, packageBody2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crate1, crate2, crate3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
    world = engine.world;

	crate1 = new Crate(400,690,60,20);
	crate2 = new Crate(360,680,20,40);
	crate3 = new Crate(440,680,20,40);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5, {isStatic:true});
	World.add(world, packageBody);
	


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  crate1.display();
  crate2.display();
  crate3.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
if(keyDown("d")){
	var option = {
	isStatic:false,
	restitution:0
}
packageBody(width/2,200,5,option);
  }
}


