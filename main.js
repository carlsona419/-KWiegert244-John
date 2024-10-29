// node-webkit
var gui = require("nw.gui");
var win = gui.Window.get();

// show devtools to debug
win.showDevTools();

// johnny-five
var five = require("johnny-five"),
  board,
  led;

// serialport
var board = new five.Board({port: "COM9"});;

// init
document.addEventListener("DOMContentLoaded", function() {


  // led button
  $("#btnToggleLed").click(function() {
    if (led.isOn) {
      led.off();
      $("#led").removeClass("led-on");
      $(this).removeClass("btn-primary").text("Turn On");
    } else {
      led.on();
      $("#led").addClass("led-on");
      $(this).addClass("btn-primary").text("Turn Off");
    }
  });

  // motor button
  board = new five.Board({
    port: portName
  });

  // when board is ready
    board.on("ready", function() {
    // create Led component connected to the pin 13
    led = new five.Led({
      pin: 13
    });

  // list all avaliable serial ports in the serialports button
  // user choose the port where Arduino board is connected
    });

});