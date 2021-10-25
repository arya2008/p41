var bruce;
var umbrella;
var drops;
var thunderstorm;

function preload(){
 
 
 1=loadImage("1.png");
 2=loadImage("2.png");
 3=loadImage("3.png");
 4=loadImage("4.png");
 
}

function setup(){
    for (var i=0;i<maxDrops;i++) {
        drops.push(new createDrop(random(0,400),random(0,400)));
    } 
    if(this.rain.position.y>height){
        MutationObserver.Body.setPosition(this.rain,{x:random(0,400,y:random(0,400))})
    }  
    for (var i=0;i<thunderstorm;i++) {
        thunderstorm.push(new createthunderstorm(random(0,400),random(0,400)));
    }    
}

function draw(){
 drops.display();
 umbrella.display();
}   

