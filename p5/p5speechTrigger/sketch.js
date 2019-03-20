//speech
let kidspeech
var plantivoice = new p5.Speech();


function setup(){
	createCanvas(windowWidth, windowHeight);
	// speech
	kidspeech = new p5.SpeechRec(); // start listening from mic
	kidspeech.onResult = doSpeak; //if it hears something, perform doSpeak function
	kidspeech.continuous = true; // keep the mic listening
	kidspeech.start(); //start listening
}


function doSpeak(){
	if (kidspeech.resultValue == true){
		changeVoice();
		setPitch();
		plantivoice.speak(kidspeech.resultString);
		console.log(kidspeech.resultString);
		} else {
			console.log('no new text')
	}
}

function doList(){
	plantivoice.listVoices();
}

// function changeVoice(){
// 	plantivoice.setVoice(Math.floor(random(plantivoice.voices.length)));
// 	console.log(Math.floor(random(plantivoice.voices.length)));
//
// ;}

//32,25 stopable voice
function changeVoice(){
	plantivoice.setVoice(32);
;}

function setPitch(){
	plantivoice.setPitch(mouseX/100.);
	plantivoice.setRate(.05)
	console.log(mouseX)
}
