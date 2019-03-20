let mic;
let myspeech
var myvoice = new p5.Speech(); // speech synthesis object

function setup() {
	createCanvas(windowWidth, windowHeight);

	mic = new p5.AudioIn();
	mic.start();

  myspeech = new p5.SpeechRec();
  myspeech.onResult = doSpeak;
  myspeech.continuous = true; //this tells it to keep listening
  myspeech.start();
}

/*
function gotSpeech() {
  //if there's a result value then print it to the console
  if(myspeech.resultValue == true){
    console.log(myspeech.resultString);
  } else {
    //
  }
}*/

function draw(){
	background(200);
	// Get the overall volume (between 0 and 1.0)
	let vol = mic.getLevel();
	fill(127);
	stroke(0);

	// Draw an ellipse with height based on volume
	let h = map(vol, 0, 1, height, 0);
	ellipse(width / 2, h - 25, 50, 50);
}

function doSpeak(){
  if(myspeech.resultValue == true){
	myvoice.speak(myspeech.resultString)
	console.log(myspeech.resultString);}else{
		console.log('no new text')
	}
}
