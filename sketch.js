var bullet,wall,thichness;
var speed,width;


function setup() {
  
  var canves =  createCanvas(1600,400);
  
  thichness = Math.round(random(22,83));
  speed = Math.round(random(223,321));
  width = Math.round(random(30,52));

   bullet = createSprite(100, 200, 50, 50);
   bullet.velocityX = 15;
   bullet.debug = true;

   wall = createSprite(1200,200,thichness,height/2);
   wall.shapeColor = color(80,80,80);
   wall.debug = true;
   
  

   
}

function draw() {
  background(255,200,200);  

 if(collided(bullet,wall)){

  
  var demage = (0.5 * width * speed * speed)/(thichness * 3);

 
 
  if(demage > 10){

    wall.shapeColor = color(255,0,0);

 }

 if(demage < 10 ){

  wall.shapeColor = color(255,0);

}



 }

 if(collided(bullet,wall)){
   bullet.velocityX = 0;
 }

  drawSprites();


  
}

