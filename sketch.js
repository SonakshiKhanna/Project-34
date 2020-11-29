//Create variables here
var database;
var dog, happyDog, foodS,foodStock,textColor,value;

function preload(){
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  
  dog = createSprite(250,250,40,40);
  // dog.addImage(dog);

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  

  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodStock);
    // dog.addImage(happyDog);
  }

  drawSprites();

  //add styles here
  fill("white");
  text("Food remaining",250,100);
  textSize(10);
  stroke(0);
}

function readStock(data) {
  foodStock = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('food/position').update({
    Food:x
  })
  
}