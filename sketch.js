

var hipnoticBall;
var database,position;
function setup(){
    database=firebase.database();
    console.log(database);
    createCanvas(500,500);
    hipnoticBall = createSprite(250,250,10,10);
    hipnoticBall.shapeColor = "red";
    var hipnoticBallPosition=database.ref('ball/position');
    hipnoticBallPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(10,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+10);
    }
    
    drawSprites();
}

function WritePosition(x,y){
    database.ref('ball/position').set({
'x' : position.x+x,
'y' : position.y+y
    })
}
function readPosition(data){
position=data.val();
console.log(position.x);
hipnoticBall.x=position.x;
hipnoticBall.x=position.y;

}
