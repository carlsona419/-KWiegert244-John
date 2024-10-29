
nw.Window.get().showDevTools();
console.log("Board Connection0");


//nw.require("nwjs-j5-fix").fix();

	
const SerialPort = require("chrome-apps-serialport").SerialPort;
const Firmata = require("firmata-io")(SerialPort);
const five = require("johnny-five");

SerialPort.list().then(ports => {

  const device = ports.find(port => {
    return port.manufacturer && port.manufacturer.startsWith("Arduino")
  });

  const board = new five.Board({
    io: new Firmata(device.path)
  });
//const greeting = document.getElementById("greeting")
console.log("Board Connection1");

  board.on("ready", function() {
    console.log("Johnny-Five is ready!");
    var led = new five.Led(13);

    $(document).ready(function(){
      $('#myButton').click(function() {
        led.on();
        console.log("CLICKED!!");
      });
    });

    $(document).ready(function(){
      $('#BUT2').click(function() {
        led.off();
        console.log("CLICKED!!");
      });
    });


  });

board.on("close", () => console.log("Closed!"));

});



