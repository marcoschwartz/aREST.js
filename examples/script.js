$(document).ready(function () {

    // Create new aREST device when button is clicked
    $('#validate').click(() => {
        let address = $('#device_address').val();
        let device = new Device(address);

        // Set device pins
        device.pinMode(6, "o");
        device.pinMode(2, "i");

        // Call func
        $('#call').click(async () => {
            let val = $('#functionName').val();
            await device.callFunction(val, 1);
        });

        // Button
        $('#on').click(async () => {
            await device.digitalWrite(5, 1);
            device.digitalRead(5, (data) => {
                $('#5').html(data.return_value);
            });
        });

        $('#off').click(async () => {
            await device.digitalWrite(5, 0);
            device.digitalRead(5, (data) => {
                $('#5').html(data.return_value);
            });
        });

        // Analog write
        $('#slider').mouseup(() => {
            let val = $('#slider').val();
            device.analogWrite(6, val);
        });

        //Analog read every 5 seconds
        device.analogRead(0, (data) => {
            $("#A0").html(data.return_value);
        });
        setInterval(() => {
            device.analogRead(0, (data) => {
                $("#A0").html(data.return_value);
            });
        }, 5000);

        // Digital read every 5 seconds
        device.digitalRead(5, (data) => {
            $('#5').html(data.return_value);
        });
        setInterval(() => {
            device.digitalRead(5, (data) => {
                $('#5').html(data.return_value);
            });
        }, 5000);

        // Temperature display
        device.getVariable('temperature', (data) => {
            $('#temperature').html(data.temperature);
        });

        // Humidity display
        device.getVariable('humidity', (data) => {
            $('#humidity').html(data.humidity);
        });
    });

});
