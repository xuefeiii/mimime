/*
Adafruit Arduino - Lesson 13. DC Motor
*/
 
 
int motorPin = 10;
 
void setup() 
{ 
  pinMode(motorPin, OUTPUT);
} 
 
 
void loop() 
{ 

    analogWrite(motorPin, 150);
} 
