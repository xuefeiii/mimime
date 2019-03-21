

var rightWords = [];
var wrongWords1 = [];
var wrongWords2 = [];
var wrongWords3 = [];
var wrongWords4 = [];
var wrongWords5 = [];

var rightWordNumber;


var kidspeech;
var plantivoice;

var mic;
var vol;







/**
 * getting data from google spreadsheet.
 */

function setup() {

	createCanvas(displayWidth, displayHeight);


 	//getting data from google spreadsheet
	var tabletop = Tabletop.init({ 
  		key: '1ze6LnSR1OF-pklNCpQjnIZY_dS1DStmpTb7gBlih7aY',
  		callback: showInfo,
		  simpleSheet: true });

	var button = createButton ('speak');
  	 button.position(300,600);
  	 button.mousePressed(gotSpeak);

  	 plantivoice = new p5.Speech();

  	 //mic = new p5.AudioIn();


  	kidspeech = new p5.SpeechRec();
    kidspeech.onResult = doSpeak;
    kidspeech.continuous = true;
    kidspeech.start();  
	 //mic.start();
  
    plantivoice.speak("say");
  	//setInterval(generateWords,1000)
  	//setInterval(timeIt, 1000)
  	//setInterval(speakWrongWords,3000)

}

/**
 * callback function
 */

function showInfo(stuff, mytabletop) {


  data = stuff;
  tabletop = mytabletop;
  //console.log(data);
  //console.log(mytabletop.sheets());
  //console.log(mytabletop.data());
  console.log(rightWords);
  console.log(wrongWords1);
  console.log(wrongWords2);
  console.log(wrongWords3);
  console.log(wrongWords4);

  //store the right words to array
  for ( var i=0; i < data.length; i++) {
    rightWords.push(data[i].RightWord);
    wrongWords1.push(data[i].TurkeyWrong);
    wrongWords2.push(data[i].CubaWrong);
    wrongWords3.push(data[i].SingaporeWrong);
    wrongWords4.push(data[i].ChinaWrong);
    wrongWords5.push(data[i].VenezuelaWrong);
  }

}


function gotSpeak() {
  plantivoice.speak("");
}

/*
 * This function has to only speak wrong word responding to speech
 */
function doSpeak(){
  
  

  if (kidspeech.resultValue == true){

    var rand = Math.floor(Math.random() * 4);
    console.log(rand);

   
  
   if( rightWordNumber == 0) {
       /*if(rand == 5) {
          plantivoice.speak(rightWords[x]);
          plantivoice.stop();
          console.log("break");
       } else {*/
          whatToShow = wrongWords1[0]; 
          plantivoice.speak(whatToShow);
          console.log(kidspeech.resultString);
      
    } else if(rightWordNumber ==1) {
          whatToShow = wrongWords2[rand]; 
          plantivoice.speak(whatToShow);
          console.log(kidspeech.resultString);
          
    } else if(rightWordNumber ==2) {
          whatToShow = wrongWords3[rand]; 
          plantivoice.speak(whatToShow);
          console.log(kidspeech.resultString);

    } else if(rightWordNumber ==3) {
          whatToShow = wrongWords4[rand]; 
           plantivoice.speak(whatToShow);
          console.log(kidspeech.resultString); 
         

    } else {
      console.log('no new text')

    }

   }
 
}


function PickRandomWord() {

  // Generate a random number between 1 and NumberOfWords
  
  var rnd = Math.floor(Math.random() * rightWords.length);
  //var rnd = 0;
  document.getElementById('WordDisplay').innerHTML = rightWords[rnd];
  console.log(rnd);

  return rnd;
}



function generate() {

   rightWordNumber = PickRandomWord();
   return rightWordNumber;
}






 











