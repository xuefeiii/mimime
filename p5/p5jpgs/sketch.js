let planti = [];
var k = 0;

function preload(){

	for (var i=1; i<7; i++) {
	planti[i] = loadImage("assets/planti"+i+".png");
}
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(115, 176, 93);
}

function mouseClicked(){
		if (k<6){
			k++
			image(planti[k], windowWidth/2-windowHeight/4, 0, windowHeight/2, windowHeight);
		} else if (k=6){
			k = 0
		}
}
