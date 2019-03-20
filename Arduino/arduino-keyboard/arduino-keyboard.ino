 #include <Keypad.h>
 #include <Servo.h>

const byte ROWS = 4; // Four rows
const byte COLS = 4; // Three columns

char keys[ROWS][COLS] = { // Define the Keymap
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};

byte rowPins[ROWS] = { 2, 3, 4, 5 };// Connect keypad ROW0, ROW1, ROW2 and ROW3 to these Arduino pins.

byte colPins[COLS] = { 6, 7, 8 ,9}; // Connect keypad COL0, COL1 and COL2 to these Arduino pins.


Keypad kpd = Keypad( makeKeymap(keys), rowPins, colPins, ROWS, COLS );// Create the Keypad

Servo myservo;

#define myservopin 13
#define blueRGBpin 12
#define redRGBpin 11
#define greenYellowPin 10


int pos = 0;

void setup()
{
   pinMode(blueRGBpin,OUTPUT);
   pinMode(redRGBpin,OUTPUT);
   pinMode(greenYellowPin,OUTPUT);
   myservo.attach(myservopin);
  
  Serial.begin(9600);
}

void setColor(int red, int green, int blue){
  #ifdef COMMON_ANODE
    red = 255 - red;
    green = 255 - green;
    blue = 255 - blue;
  #endif
  analogWrite(redRGBpin, red);
  analogWrite(blueRGBpin, blue);  
  }

void loop()
{
  char key = kpd.getKey();
  if(key)  // Check for a valid key.
  {
    switch (key)
    {
      case '1':
        setColor(255,0,0);
        break;
      case '4':
        setColor(0,0,255);
        break;
        
      case '2':
  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
        break;
      case '5':
        myservo.write(0);
        break;


      case 'A':
        digitalWrite(greenYellowPin, HIGH);
        break;
      case 'B':
        digitalWrite(greenYellowPin, LOW);
        break;
        
      case '*':
        digitalWrite(blueRGBpin, LOW);
        digitalWrite(redRGBpin, LOW);
        digitalWrite(greenYellowPin, LOW);
        digitalWrite(greenYellowPin, LOW);
       break;
  

       case 'D':
        digitalWrite(blueRGBpin, HIGH);
        digitalWrite(redRGBpin, HIGH);
        digitalWrite(greenYellowPin, HIGH);
        digitalWrite(greenYellowPin, HIGH);
        
      default:
      Serial.println(key);
    }
  }
}
