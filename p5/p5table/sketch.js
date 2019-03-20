let table;
var rowCount;
var columnCount;
var textContent

let mic;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('assets/countries.csv', 'csv', 'header');
}

function setup() {

	createCanvas(700,200);
      var mic = new p5.AudioIn();
      mic.start();

	print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');

	rowCount = table.getRowCount();
	columnCount = table.getColumnCount();

	for (var i=0;i<=rowCount;i++){
  print(table.get(i, 'right'));
	textContent = table.get(i,'right');
	}
 }

function draw(){
  background(200);
  rect(20,20,20,20);

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, height, 0);
  ellipse(width / 2, h - 25, 50, 50);


}
