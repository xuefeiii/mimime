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

#define myservopin 13
#define ledspin 10
#define motorpin 9
#define blueRGBpin 12
//#define redRGBpin 11
#define bluepin 11

//---setup ------------------------------//
void setup(){
  myservo.attach(myservopin);
 // pinMode(blueRGBpin, OUTPUT);
  //pinMode(redRGBpin, OUTPUT);
  pinMode(ledspin,OUTPUT);
  pinMode(motorpin, OUTPUT);
  pinMode(bluepin, OUTPUT);

  Serial.begin(9600);
}

//void setColor(int red, int green, int blue){
//  #ifdef COMMON_ANODE
//  red = 255 - red
//  green = 0;
//  blue = 255 - blue;
//  #endif
//  analogWrite(redRGBpin, red);
//  analogWrite(blueRGBpin, blue);
//}

void loop(){
  
  char key = kpd.getKey();
  if(key)
  {
    Serial.println(key);
    switch(key)
    {
      //-- 1 -- start/stop the game
      case '1':
        digitalWrite(ledspin, HIGH);
        break;
      case '2':
        digitalWrite(ledspin, LOW);
        break;
        
      //-- 2 -- move the mouth
      case '3':
        int pos = 0;

        for (pos = 0; pos <= 180; pos += 1){
          myservo.write(pos);
          delay(10);
        } for (pos = 180; pos >= 0; pos -= 1){
          myservo.write(pos);
          delay(10);
        }
        break;
      case '4':
        digitalWrite(bluepin, HIGH);
        break;

       //-- 3 -- wrong guess
       case '5':
       
//        digitalWrite(ledspin, HIGH);
//        digitalWrite(redRGBpin, HIGH);
        //digitalWrite(blueRGBpin, LOW);
         break;

       //-- 4 -- right guess
       case '6':
        digitalWrite(bluepin, LOW);
       // digitalWrite(redRGBpin, LOW);
//       digitalWrite(ledspin, LOW);
//        digitalWrite(blueRGBpin, HIGH);
       // digitalWrite(motorpin, 200);
        break;
       case '7':
        //setColor(0,0,0);
       // digitalWrite(motorpin, LOW);
        break;

      /*-- close all ---
      case '*':
      setColor(0,0,0);
      digitalWrite(motorpin, HIGH);
      myservo.write(0);
      digitalWrite(ledspin, HIGH);
      break;

      case '#':
      setColor(255,0,255);
      digitalWrite(motorpin, LOW);
      myservo.write(0);
      digitalWrite(ledspin, LOW);
      break;
     */ 
    }
  }
}
