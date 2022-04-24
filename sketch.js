var blueBin, greenBin, yellowBin, redBin;
var blueBinImg, greenBinImg, yellowBinImg, redBinImg
var batteryImg, mobileImg, newspaperImg, crumpledpaperImg;
var breadImg, fishImg, polybagImg, boxImg, bottleImg, canImg;
var appleImg, bananaImg, eggImg;
var bgImg, bg;
var sprite;
var gameState = "start";

function preload() {
  blueBinImg = loadImage("bluebin.png");
  greenBinImg = loadImage("greenbin.png");
  yellowBinImg = loadImage("yellowbin.png");
  redBinImg = loadImage("redbin.png");
  bgImg = loadImage("bg1.jpg");
  appleImg = loadImage("apple.png");
  bananaImg = loadImage("banana.png");
  mobileImg = loadImage("mobile.png");
  boxImg = loadImage("box.png");
  newspaperImg = loadImage("newspaper.png");
  fishImg = loadImage("fish.png");
  polybagImg = loadImage("polybag.png");
  bottleImg = loadImage("bottle.png");
  canImg = loadImage("can.png");
  crumpledpaperImg = loadImage("crumpledpaper.png");
  eggImg = loadImage("egg.png");
  breadImg = loadImage("bread.png")
  
};

function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(width/2, height/2, windowWidth, windowHeight);
  bg.addImage(bgImg);
  bg.scale = 1.5;

  greenBin = createSprite(width/2-400,height-200, 100, 100);
  greenBin.addImage(greenBinImg);
  greenBin.scale = 1;

  blueBin = createSprite(width/2-150,height-200, 100, 100);
  blueBin.addImage(blueBinImg);
  blueBin.scale = 1;

  yellowBin = createSprite(width/2+150,height-200, 100, 100);
  yellowBin.addImage(yellowBinImg);
  yellowBin.scale = 1;

  redBin = createSprite(width/2+400,height-200, 100, 100);
  redBin.addImage(redBinImg);
  redBin.scale = 1;

  /*apple = createSprite(width/2, height/2, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.2;

  banana = createSprite(width/2-350, height/2-80, 10, 10);
  banana.addImage(bananaImg);
  banana.scale = 0.2;

  egg = createSprite(width/2+400, height/2, 10, 10);
  egg.addImage(eggImg);
  egg.scale = 0.2;*/

  addSprites(eggImg,0.2,width/2-400, height/2);
  addSprites(appleImg,0.2,width/2+500, height/2);
  addSprites(bananaImg,0.2,width/2-100, height/2);
  addSprites(polybagImg,0.5,width/2+150, height/2);
  addSprites(crumpledpaperImg,0.2,width/2-200, height/2);
  addSprites(boxImg,0.5,width/2+100, height/2-100);
  addSprites(fishImg,0.2,width/2-250, height/2);
  addSprites(newspaperImg,0.2,width/2-200, height/2);
  addSprites(canImg,0.2,width/2+300, height/2);
  addSprites(breadImg,0.2,width/2-300, height/2);
  addSprites(mobileImg,0.2,width/2+350, height/2);

  //mouseDragged(egg1);
};

function draw() {
  background("black");  
  drawSprites();

  if(gameState === "start") {
    bg = createSprite(width/2, height/2, windowWidth, windowHeight);
    bg.addImage(bgImg);
    bg.scale = 1.5;
  }

  if(gameState === "play") {
    bg = createSprite(width/2, height/2, windowWidth, windowHeight);
    bg.addImage(bgImg);
    bg.scale = 1.5;
  }  
};

function addSprites( spriteImage, scale, posX, posY) { 
  sprite = createSprite(posX, posY); 
  sprite.addImage("sprite", spriteImage);
  sprite.scale = scale;

  /*if (mousePressedOver(sprite)) {
    sprite.x = World.mouseX; sprite.y=World.mouseY;
  }*/
}

/*function mouseDragged(spriteName) { 
  spriteName.x = World.mouseX;
  spriteName.y = World.mouseY;

}*/