//name spacing the libareries
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world,ground,ball;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle(400,350,800,20,ground_options);

  World.add(world,ground);
  console.log(ground);
  var ball_options = {
    restitution:1.0
  }
  ball = Bodies.circle(400,200,20,ball_options);
  World.add(world,ball);
}

function draw() {
  background("blue"); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
}
