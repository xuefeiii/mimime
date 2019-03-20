var words = ["i", "heart", "p", "five"]; // some words
var iptr = 0; // a counter for the words
var myVoice = new p5.Speech(); // new P5.Speech object
var listbutton; // button
function setup()
{
  // graphics stuff:
  createCanvas(400, 400);
  background(255, 0, 0);
  fill(255, 255, 255, 100);
  // instructions:
  textSize(72);
  textAlign(CENTER);
  text("click me", width/2, height/2);
  // button:
  listbutton = createButton('List Voices');
    listbutton.position(180, 430);
    listbutton.mousePressed(doList);
    // say hello:
  myVoice.speak('yeah, baby!!!');
}
function draw()
{
  // why draw when you can click?
}
function doList()
{
  myVoice.listVoices(); // debug printer for voice options
}
function keyPressed()
{
  background(255, 0, 0); // clear screen
}
function mousePressed()
{
  // if in bounds:
  if(mouseX<width && mouseY<height) {
    ellipse(mouseX, mouseY, 50, 50); // circle
    // randomize voice and speak word:
    myVoice.setVoice(Math.floor(random(myVoice.voices.length)));
    myVoice.speak(words[iptr]);
    iptr = (iptr+1) % words.length; // increment
  }
}