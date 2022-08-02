const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies 
const Body = Matter.Body

var suelo
//Crear espacio de nombre para Engine
//Crear espacio de nombre para World
//Crear espacio de nombre para Bodies
//Crear espacio de nombre para Body


function setup() {
  createCanvas(400,400);
//crear engine
engine = Engine.create();
  //Agregar world a engine
  world = engine.world;

  
   var ball_options = {
    restitution: 1,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//crear un fondo
suelo = Bodies.rectangle(200,400,400,20,ground_options )
//agregarlo a world
World.add(world,suelo)

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //escribir una función rectangle para mostrar el suelo.
 
 rect(suelo.position.x,suelo.position.y,400,20)

  
  
}

