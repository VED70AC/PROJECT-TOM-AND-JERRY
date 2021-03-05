var cat,catImg,cat2;
var mouse,mouseImg,mouse2;
var garden,gardenImg;
function preload() {
    //load the images here
    catImg=loadAnimation("images/cat2.png","images/cat2.png");
mouseImg=loadAnimation("images/mouse2.png","images/mouse2.png");
gardenImg=loadImage("images/garden.png");
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(700,700,100,100);
cat.addAnimation("cat",catImg);
cat.scale=0.1;
mouse=createSprite(300,400,50,50);
mouse.addAnimation("mouse",mouseImg);
mouse.scale=0.1;
if(cat.isTouching(mouse)){
    cat.addAnimation("cat",catImg);
    mouse.addAnimation("mouse",mouseImg);
}


function draw() {

    background(gardenImg);
    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}