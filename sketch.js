let font;
let img;
let song;
var myRec = new p5.SpeechRec('en-US', parseResult); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)



function setup() {
  createCanvas(800, 1224);
  //myRec.onResult = parseResult; // now in the constructor
  myRec.start(); // start engine
  song = loadSound('Jersey.mp3');
}

function draw() {

  fill(255);
  rect(0, 0, 800, 1200);

  ellipseMode(CENTER);
  fill(168, 30, 34);

  quad(180, 733, 180, 760, 0, 784, 0, 726);
  //quad(0,0,0,70,0,159,305,626);
  quad(227, 0, 390, 0, 497, 550, 405, 585);
  quad(508, 0, 724, 0, 650, 584, 556, 550);


  quad(565, 795, 623, 781, 791, 1031, 792, 1131);

  fill(253, 185, 24);
  strokeWeight(0);
  ellipse(500, 700, 400, 400);

  fill(168, 30, 34);
  quad(0, 117, 0, 1224, 681, 1224, 656, 1154);


  fill(0, 0, 0);
  textAlign(CENTER, CENTER);
  stroke(255, 255, 255);
  strokeWeight(2);
  textSize(40);
  textFont(font);
  text('A Lesson in Romantics', 0, 600, 300, 400);




  textFont(font);
  text('Jersey', 0, 200, 400, 200);



  fill(0);

  textSize(32);
  textAlign(CENTER, CENTER);
  image(img, 0, 900, 800, 400);

   if (mouseX>400){
  fill(100, 100, 100);
  
    quad(227, 0, 390, 0, 497, 550, 405, 585);
    quad(508, 0, 724, 0, 650, 584, 556, 550);
    quad(565, 795, 623, 781, 791, 1031, 792, 1131);
       fill(253, 185, 24);
  strokeWeight(0);
  ellipse(500, 700, 400, 400);
     
      fill(50, 50, 50);
  quad(0, 117, 0, 1224, 681, 1224, 656, 1154);
     image(img, 0, 900, 800, 400);
      fill(0, 0, 0);
  textAlign(CENTER, CENTER);
  stroke(255, 255, 255);
  strokeWeight(2);
  textSize(40);
  textFont(font);
  text('A Lesson in Romantics', 0, 600, 300, 400);
   }
}

function parseResult() {
  // recognition system will often append words into phrases.
  // so hack here is to only use the last word:
  var mostrecentword = myRec.resultString.split(' ').pop();
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
  }

  //to make stuff happen
  if (mostrecentword == "emo") {
    song.play();

  }
  


  console.log(mostrecentword);
}

function preload() {
  font = loadFont('aBigDeal.ttf');
  img = loadImage('build.png');
}