# aREST.js

aREST.js is a JavaScript library that was made to easily control your projects running aREST. It can be used with a simple web browser without Node.js. It works with all the aREST projects using HTTP communication, for example using Arduino with the CC3000 WiFi chip, the Ethernet shield, or the WiFi shield. It also works with the ESP8266 WiFi chip.

## Installation

You can simply embed aREST.js in an HTML page by including the file from the CDN:

```shell
https://cdn.rawgit.com/marcoschwartz/aREST.js/master/aREST.js
```

Note that you also need to include jQuery & AjaxQ.

## Usage

You can simply create a new device in the JavaScript part of your project by giving the IP address of your aREST board as an argument:

```js
var device = new Device(ip_address);
```

## Getting Started

Let's see a simple example. We are going to create a new aREST device, set pin number 6 to an output, and then turn pin 6 to a HIGH state.

You first need to include the required libraries in your HTML page:

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/Foliotek/AjaxQ/master/ajaxq.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/marcoschwartz/aREST.js/master/aREST.js"></script>
<script type="text/javascript" src="script.js"></script>
```

Then, inside the script.js file, use this code to create a new aREST device (modify the IP address with the one from your device), set pin number 6 to an output, and then turn pin 6 to a HIGH state:

```js
// Create device
var device = new Device("192.168.1.101");

// Set pin 6 to output
device.pinMode(6, "OUTPUT");

// Put set pin 6 to HIGH
device.digitalWrite(6, 1);
```

I also invite you to check the demo.html example that is given with this GitHub repository.

## Supported Commands

This are all the commands that are currently supported by the library, that you can call on Device instance:

* pinMode
* digitalWrite
* digitalRead
* analogWrite
* analogRead
* getVariable
* callFunction 
