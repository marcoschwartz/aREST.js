$( document ).ready(function() {

  // Create new aREST device
  var device = new Device("192.168.1.101");

  // Set device pins
  device.pinMode(6, "OUTPUT");
  device.pinMode(2, "INPUT");

  // Button
  $('#on').click(function() {
    device.digitalWrite(6, 1);
  });

  $('#off').click(function() {
    device.digitalWrite(6, 0);
  });

  // Analog write
  $('#slider').mouseup(function() {
    var val = $('#slider').val();
    device.analogWrite(6, val);
  });

  // Analog read
  device.analogRead(0, function(data) {
    $('#analog').html(data.return_value);
  });

  // Digital read
  device.digitalRead(2, function(data) {
    $('#digital').html(data.return_value);
  });

  // Temperature display
  device.getVariable('temperature', function(data) {
    $('#temperature').html(data.temperature);
  });

  // Humidity display
  device.getVariable('humidity', function(data) {
    $('#humidity').html(data.humidity);
  });

  // Function
  //device.callFunction('led', '0');

});

