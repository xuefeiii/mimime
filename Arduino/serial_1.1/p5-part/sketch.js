var serial;
var portName = '/dev/cu.usbmodem1421'
//var inData;
var outData = 1;

function setup(){
  createCanvas(width, height);

  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', printList);  // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing

  serial.list();                      // list the serial ports
  serial.open(portName);              // open a serial port


}

function draw(){
  //background(map(inData,0,255,0,255));
  background(0);
  if (mouseX<= width/2){
    outData = 1
  } else{
    outData = 2
  }
  serial.write(outData);
  console.log(outData);
}



/////////////////////////



function printList(portList){
  for (var i=0;i<portList.length;i++){
    print(i + "" + portList[i]);
  }
}

function serverConnected(){
  print('connect to server.');
}

function portOpen(){
  print('the serial port opened.')
}

function serialEvent(){
  //inData = Number(serial.read())
}

function serialError(err){
  print('something went wrong with the serial port.' + err);
}

function portClose(){
  print('the serial port closed.');
}
