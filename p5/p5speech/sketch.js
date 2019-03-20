/*
This script has worked on Desktop, through local server or directly clicking on the HTML file

function repeatKidspeech has been consistently working
function draw with mic input sometimes doesn't work, but refreshing the webpage multiple times makes it work

On desktop, the pop-up window asking for mic permission has been consistenly working
On mobile, the pop-up window hasn't worked once
*/

let mic;
let kidspeech //recording from microphone
var plantivoice = new p5.Speech(); // speech synthesis object

function setup() {
	createCanvas(windowWidth, windowHeight);

	//p5 sound library, which triggers the pop-up window "this webpage wants to use your microphone"
	mic = new p5.AudioIn();
	mic.start();

	//p5 speech library, which triggers again the pop-up window "this webpage wants to use your microphone"
  kidspeech = new p5.SpeechRec();
  kidspeech.onResult = repeatKidspeech;
  kidspeech.continuous = true; //this tells it to keep listening
  kidspeech.start();

	//so there're actually 2 pop-up windows asking for mic permission on desktop browser

}

// draw an ellipse based on mic volume
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

// repeat what I just said
function repeatKidspeech(){
  if(kidspeech.resultValue == true){
	plantivoice.speak(kidspeech.resultString)
	console.log(kidspeech.resultString);}else{
		console.log('no new text')
	}
}
