
var voice;
var mic;
var vol;

var data;
var tabletop;


var rightWords = [];
var wrongWords = [];

var kidspeech;
var plantivoice;



function setup() {
	createCanvas(displayWidth, displayHeight);


	//textFont(font);
	//createCanvas(displayWidth, displayHeight);
 	//getting data from google spreadsheet
	tabletop = Tabletop.init({
  		key: '1ze6LnSR1OF-pklNCpQjnIZY_dS1DStmpTb7gBlih7aY',
  		callback: showInfo,
		simpleSheet: true });

	var button = createButton ('speak');
  	button.position(300,600);
  	button.mousePressed(gotSpeak);

  	voice = new p5.Speech();
  	plantivoice = new p5.Speech();



  kidspeech = new p5.SpeechRec();
	kidspeech.onResult = doSpeak;
	kidspeech.continuous = true;
	kidspeech.start();

  	//setInterval(generateWords,1000)
  	//setInterval(timeIt, 1000)
  	//setInterval(speakWrongWords,3000)

}



function doSpeak(){


	var x = PickRandomWord()
	if (kidspeech.resultValue == true){
		//pick random right word
		console.log(x)
		//pick random wrong word
		var rand = Math.floor(Math.random() * 5);
		console.log(rand);

		if(rand == 5) {
			plantivoice.speak(rightWords[x]);
			plantivoice.stop();
			console.log("break");
		} else {
			whatToShow = wrongWords[rand];
			plantivoice.speak(whatToShow);
			console.log(kidspeech.resultString);
		}


	} else {
		console.log('no new text')
	}
}





function showInfo(data, tabletop) {


	console.log(rightWords);
	//console.log(wrongWords);
	//store the right words to array
	for ( var i=0; i < data.length; i++) {
		rightWords.push(data[i].RightWord);
	}


	if(PickRandomWord() == 0) {
			//var wrongWords= [];
			wrongWords = [data[0].SW0,data[0].SW1,data[0].SW2,data[0].SW3,data[0].SW4];
			console.log(wrongWords);
	} else if(PickRandomWord() == 1) {
			wrongWords = [data[1].SW0,data[1].SW1,data[1].SW2,data[1].SW3,data[1].SW4];
			console.log(wrongWords);
	}  else if(PickRandomWord() == 2) {
			wrongWords = new Array(4);
			wrongWords.push(data[2].SW0);
			wrongWords.push(data[2].SW1);
			wrongWords.push(data[2].SW2);
			wrongWords.push(data[2].SW3);
			wrongWords.push(data[2].SW4);
			console.log(wrongWords);
	}  else if(PickRandomWord(4) == 3) {
			wrongWords = new Array();
			wrongWords.push(data[3].SW0);
			wrongWords.push(data[3].SW1);
			wrongWords.push(data[3].SW2);
			wrongWords.push(data[3].SW3);
			wrongWords.push(data[3].SW4);
			console.log(wrongWords);
	} 	else if(PickRandomWord() == 4) {
			wrongWords = new Array(4);
			wrongWords.push(data[4].SW0);
			wrongWords.push(data[4].SW1);
			wrongWords.push(data[4].SW2);
			wrongWords.push(data[4].SW3);
			wrongWords.push(data[4].SW4);
			console.log(wrongWords);
	}





		/*} else if (rnd == 1) {
			displayRightstoreWrong(1);
		} else if (rnd == 2) {
			displayRightstoreWrong(2);

		} else if (rnd == 3) {
			displayRightstoreWrong(3);

		} else if (rnd == 4) {
			displayRightstoreWrong(4);*/


		}






	//function createWrongWords( i ) {

	/*	background(255);
		var div = createDiv(rightWords[i]).size(100, 100);
		console.log("showword");
		div.style('font-size', '48px');
		div.style('font-family:verdana');
		div.style('color', '#ffffff');
		div.center();
		div.position(110,250);*/

	//}



function PickRandomWord() {

	// Generate a random number between 1 and NumberOfWords
	var rnd = Math.floor(Math.random() * rightWords.length);
	document.getElementById('WordDisplay').innerHTML = rightWords[rnd];
	console.log(rnd);

	return rnd;
}






/*
function speakWrongWords(wrongWords) {

	var rand = round(random(wrongWords.length -1));
    whatToShow = wrongWords[rand];
    voice.speak(whatToShow);
}*/
