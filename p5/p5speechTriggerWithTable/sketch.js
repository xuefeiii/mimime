//speech
let kidspeech
var plantivoice = new p5.Speech();
//table
let plantiTable;
var rowCount;
var columnCount;
var plantiwords;

function preload(){
	plantiTable = loadTable('assets/planti.csv', 'csv', 'header');
}


function setup(){
	createCanvas(windowWidth, windowHeight);
	// speech
	kidspeech = new p5.SpeechRec(); // start listening from mic
	kidspeech.onResult = doSpeak; //if it hears something, perform doSpeak function
	kidspeech.continuous = true; // keep the mic listening
	kidspeech.start(); //start listening

	//table
	print(plantiTable.getRowCount() + 'total rows in table');
	print(plantiTable.getColumnCount() + 'total columns in table');

	rowCount = plantiTable.getRowCount();
	columnCount = plantiTable.getColumnCount();

	randomRightWord();
}



function randomRightWord(){
	var rightWordRow = int(random(0,3));
	console.log(rightWordRow);

	print(plantiTable.get(rightWordRow, 'right'));
}

function wrongWord(){
	var wrongWord = [];
	for (var i=0;i<columnCount;i++){

	}
}

function doSpeak(){
	if (kidspeech.resultValue == true){
		plantivoice.speak('thats funny');
		console.log(kidspeech.resultString);
		} else {
			console.log('no new text')
	}
}
