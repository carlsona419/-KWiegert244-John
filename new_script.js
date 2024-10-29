nw.Window.get().showDevTools();
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

  board.on("ready", () => {
    console.log("Johnny-Five is ready!");
    const led = new five.Led(13);
    led.blink(500);
  });

  board.on("close", () => console.log("Closed!"));

});