var five = require("johnny-five");
var circuito = new five.Board();
var led, motor, celda;
var turno = 0;


circuito.on("ready", prender) //Cuando el ciruito este listo, empieza la funcion prender.

function prender(){
 //configurcion recibe un Json
  var configurcion = {
    pin: "A0",
    freq: 50
  }

  celda = new five.Sensor(configurcion)

  led=new five.Led(13)
  led.on()

  motor= new five.Servo(9)
  motor.to(0);


  ondear()

}

function ondear(){
  console.log("Luz: " + celda.value)
  var luz = celda.value

  if (luz > 800){
    if(turno){ //turno == 1
      turno=0
      motor.to(70)

    }
    else{ // turno == 0
      turno = 1
      motor.to(110)
    }
  }
  else {
    motor.to(30)
  }

  setTimeout(ondear, 1000) //llamamos a la funcion ondear cada 1000 ms
}
