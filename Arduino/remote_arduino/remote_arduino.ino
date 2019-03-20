/*
 * Modified by Rui Santos, http://randomnerdtutorialscom
 * based on IRremote Library - Ken Shirriff

1 = 16724175
2 = 16718055
3 = 16743045
4 = 16716015
5 = 16726215
6 = 16734885
7 = 16728765
8 = 16730805
9 = 16732845

*/



 
#include <IRremote.h>
 
int IR_Recv = 11;   //IR Receiver Pin 3
int bluePin = 10;
int greenPin = 9;
int yellowPin = 8;
int motorPin = 7;
 
IRrecv irrecv(IR_Recv);
decode_results results;
 
void setup(){
  Serial.begin(9600);  //starts serial communication
  irrecv.enableIRIn(); // Starts the receiver
  pinMode(bluePin, OUTPUT);      // sets the digital pin as output
  pinMode(greenPin, OUTPUT);      // sets the digital pin as output
  pinMode(yellowPin, OUTPUT);      // sets the digital pin as output
  pinMode(motorPin, OUTPUT); 

}
 
void loop(){
  //decodes the infrared input
  if (irrecv.decode(&results)){

    
    long int decCode = results.value;
    Serial.println(results.value);
    //switch case to use the selected remote control button

    
    switch (results.value){
      case 16724175: //when you press the 1 button
        digitalWrite(bluePin, HIGH);
        break;   
      case 16716015: //when you press the 4 button
        digitalWrite(bluePin, LOW);   
        break;
       case 16718055: //when you press the 2 button
        digitalWrite(greenPin, HIGH);
        break;           
       case 16726215: //when you press the 5 button
        digitalWrite(greenPin, LOW);
        break;       
       case 16743045: //when you press the 3 button
        digitalWrite(yellowPin, HIGH);
        digitalWrite(motorPin, HIGH);
        break;       
       case 16734885: //when you press the 6 button
        digitalWrite(yellowPin, LOW);
        digitalWrite(motorPin, LOW);
        break;
    
       /*case 16728765: //when you press the 7 button
        digitalWrite(motorPin, HIGH);
        break;
        
       case 16730805: //when you press the 8 button

        break;
        */
    
    }
    irrecv.resume(); // Receives the next value from the button you press
  }
  delay(10);
}

/*
int motorPin = 7;
 
void setup() 
{ 
  pinMode(motorPin, OUTPUT);
  Serial.begin(9600);
  while (! Serial);
  Serial.println("Speed 0 to 255");
} 
 
 
void loop() 
{ 
  if (Serial.available())
  {
    int speed = Serial.parseInt();
    if (speed >= 0 && speed <= 255)
    {
      analogWrite(motorPin, speed);
    }
  }
} */
