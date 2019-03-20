//---include keypad and servo libraries ------------------------------//
 #include <Keypad.h>
 #include <Servo.h>

//---setting up keypad ------------------------------//
const byte ROWS = 4; // Four rows
const byte COLS = 3; // Three columns

char keys[ROWS][COLS] = { // Define the Keymap
  {'1','2','3'},
  {'4','5','6'},
  {'7','8','9'},
  {'*','0','#'}
};

byte rowPins[ROWS] = {2,3,4,5};
byte colPins[COLS] = {6,7,8};

Keypad kpd = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

//---define------------------------------//
Servo myservo;

#define bpin 13
#define rpin 12
#define servopin 11
#define motorPin 10
#define ledspin 9

//---setup ------------------------------//
void setup(){
  pinMode(ledspin,OUTPUT);
  pinMode(motorPin, OUTPUT);
  pinMode(bpin, OUTPUT);
  pinMode(rpin, OUTPUT);
  myservo.attach(servopin);

  Serial.begin(9600);
}

void loop(){
  
  char key = kpd.getKey();
  if(key)
  {
    Serial.println(key);
    switch(key)
    {

      case '7':
        
        analogWrite(motorPin, 255);
        delay(3000);
        analogWrite(motorPin, 0);
      break;
      
      //-- 1 -- start/stop the game
      case '1':
        digitalWrite(ledspin, HIGH);
      break;
   
      case '2':
        digitalWrite(ledspin, LOW);
      break;
        
         //-- 2 -- move the mouth
      case '3':
        digitalWrite(bpin, HIGH);
        digitalWrite(rpin, LOW);
      break;
 
      case '4':
        digitalWrite(rpin, HIGH);
        digitalWrite(bpin, LOW);
      break;
    
      case '5':
        digitalWrite(rpin,LOW);
        digitalWrite(bpin,LOW);
      break;


      case '6':
        int pos = 0;

        for (pos = 0; pos <= 180; pos += 1){
          myservo.write(pos);
          delay(8);
        } 
        for (pos = 180; pos >= 0; pos -= 1){
          myservo.write(pos);
          delay(8);
        }
      break;




    }
  }
}
