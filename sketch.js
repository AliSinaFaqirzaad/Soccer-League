var ballImg;
var player1Img ,player2Img;
var soccerGroundImg ,welcomingImg;
var g1, g2;
var edges, wall1 ,wall2 ,wall3 ,wall4;
var gameState = "play"

var score = 0


function preload(){
    ballImg = loadImage("images/ball.png");
    player1Img = loadImage("images/player1.png");
    player2Img = loadImage("images/player2.png");
    soccerGroundImg = loadImage("images/soccerGround.jpeg");
    welcomingImg = loadImage("images/welcoming.jpeg");
}
function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    

    ball = createSprite(723,450,30,30);
    ball.addImage(ballImg);
    ball.scale = 0.1
    ball.velocityX = 10
    ball.velocityY = 10

    player1 = createSprite(1000,455,30,30);
    player1.addImage(player1Img);
    player1.scale = 0.2

    player2 = createSprite(400,454,30,30);
    player2.addImage(player2Img);
    player2.scale = 0.3
    player2.velocityY = 3


   g1 = createSprite(160,450,80,260);
   g1.visible = false
   g2 = createSprite(1290,450,80,260);
   g2.visible = false


   wall1 = createSprite(718,80,displayWidth-100,10);
   wall1.visible = false
   wall2 = createSprite(718,displayHeight-80,displayWidth-100,10);
   wall2.visible = false
   wall3 = createSprite(113,441,10,height-100);
   wall3.visible = false
   wall4 = createSprite(width-110,441,10,height-100);
   wall4.visible = false
}
function draw(){
    background(soccerGroundImg);
    edges = createEdgeSprites();

    



    if (gameState === "play"){
        console.log(mouseX,mouseY);

        if(keyDown ("UP_ARROW")){
            player1.y-=4
    
        }
        if(keyDown("DOWN_ARROW")){
            player1.y+=4
        
        }
        if(keyDown("RIGHT_ARROW")){
            player1.x+=4
        }
        if(keyDown("LEFT_ARROW")){
            player1.x-=4
            6
        
        }

        textSize(20);
        fill(1);
           text(("if u make a goal ,u r a soccer pro"),560,40)

        player2.y = ball.y-10

        player2.bounceOff(wall1)
        player2.bounceOff(wall2)
       
        ball.collide(edges);
        ball.bounceOff(player1);
        ball.bounceOff(player2);

        if(
        ball.bounceOff(wall1)||
        ball.bounceOff(wall2)||
        ball.bounceOff(wall3)||
        ball.bounceOff(wall4)){
            ball.velocityX-=0.8
            ball.velocityY-=0.8
        }
        player1.collide(wall1);
        player1.collide(wall2);
        player1.collide(wall3);
        player1.collide(wall4);
        player2.collide(wall1);
        player2.collide(wall2);
        player2.collide(wall3);
        player2.collide(wall4);

       
       if (ball.isTouching(g2)){
        textSize(80);
        fill(1);
           text(("you lost the game :("),500,500)
           
           gameState = end;
       }

       if (ball.isTouching(g1)){
        textSize(80);
        fill(1);
           text(("u won the the game:)"),200,500)
           
           gameState = end;
       }

       
    
}



    drawSprites();

    }

