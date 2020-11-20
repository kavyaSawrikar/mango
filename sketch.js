
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bottumBox
var left;
var right;
var ball;
var ground;
var ballImage
var binImage
var mango;
var mangoImage;

function preload()
{
	ballImage = loadImage("rock.png");
	binImage = loadImage("tree4.jpeg");
	mangoImage = loadImage("mango5.png");
}

function setup() {
	createCanvas(800, 700);

	ground = createSprite(500,700,1000,50);
	ground.shapeColor = ("white");

	ball=createSprite(100,665,25,[25],[25]);
	ball.shapeColor = ("blue");
	ball.addImage(ballImage);
	ball.scale = 0.05;

	bottumBox=createSprite(630,470,200,20);
	bottumBox.shapeColor = (rgb(139,69,19));
	bottumBox.addImage(binImage);
	bottumBox.scale = 2;

	mango = createSprite(600,500,200,20);
	mango.addImage(mangoImage);
	mango.scale = 0.1;

	//left=createSprite(510,625,20,100);
	//left.shapeColor = (rgb(139,69,19));

	right=createSprite(687,590,10,100);
	right.shapeColor = ("white");

	world=right.world;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(999);
  ball.velocityY = ball.velocityY +0.8;
  ball.collide(ground);
  ball.collide(right);
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32) {
		ball.velocityY = -15;
		ball.velocityX = 20;
		mango.velocityY = 6;	
		
//Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});

	}

}


