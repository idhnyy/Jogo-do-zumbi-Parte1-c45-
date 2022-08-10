var fundo,fundoImg;
var sobrevivente, sobreviventeImg, sobrevivente_atirando;
var barreiras;

function preload(){
  
  sobreviventeImg = loadImage("assets/shooter_2.png")
  sobrevivente_atirando = loadImage("assets/shooter_3.png")

  fundoImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
  
  fundo = createSprite(displayWidth/2 +55, displayHeight/2 -40, 20, 20);
  fundo.addImage(fundoImg);
  fundo.scale = 1.20;
  
  sobrevivente = createSprite(displayWidth -1150, displayHeight -300, 50 , 50);
  sobrevivente.addImage(sobreviventeImg);
  sobrevivente.scale = 0.3;
  sobrevivente.setCollider("rectangle",0,0,300,500 );
  sobrevivente.debug = true;

  barreiras = createEdgeSprites();
}


function draw() {
  background(0); 
 
  if(keyDown(UP_ARROW)|| touches.length>0){
    sobrevivente.y -= 30;
  }

  if(keyDown(DOWN_ARROW)|| touches.length>0){
    sobrevivente.y += 30;
  }

  sobrevivente.collide(barreiras[3]);
  sobrevivente.collide(barreiras[2]);

  if(keyWentDown("space")){
    sobrevivente.addImage(sobrevivente_atirando);
  }
  else if(keyWentUp("space")){
    sobrevivente.addImage(sobreviventeImg);
  }


drawSprites();

}
