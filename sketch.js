//Create variables here
var dog, happydog, foodS, foodStock, database

function preload()
{
  //load images here
  dog1 = loadImage("images/dogImg.png")
  dog2 = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500,500);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  dog = createSprite(250,250,10,10);
  dog.addImage(dog1);
  dog.scale = 0.15;
  
}


function draw() {  
background(46,139,87);
 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog2);
    }
  //add styles here
 drawSprites();

 textSize(14);
 stroke("black");
fill("white");
 text("food remaining ="+foodS,100,150);


}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x= x-1;
  }

  database.ref('/').update({
    Food : x
  });
 
}



