let myspeech
var myvoice = new p5.Speech(); // speech synthesis object

function setup() {
	noCanvas();
  myspeech = new p5.SpeechRec();
  //myspeech.onResult = gotSpeech;
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

function doSpeak(){
  if(myspeech.resultValue == true){ 
	myvoice.speak(myspeech.resultString)
	console.log(myspeech.resultString);}else{
		console.log('no new text')
	}
}

//stop listening when the machine is speaking