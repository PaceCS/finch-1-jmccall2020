"use strict";

load("readline.js");
load("Finch.js");

// Gain access to our finch
var finch = new Finch();

// -----------------------------------------------
// Don't change anything above the line
finch.setLED(0, 0, 0);
wait(5000);
finch.setLED(255, 255, 255);
wait(5000);
finch.setLED(0, 0, 0);
wait(5000);

// Our first set of code will illuminate the Finch in one color, wait 1 second, then illuminate it in a different color
finch.setLED(255, 0, 0);
wait(1000);
finch.setLED(0, 255, 0);
wait(1000);

finch.setLED(0, 0, 0);
wait(5000);
finch.setLED(255, 255, 255);
wait(5000);
finch.setLED(0, 0, 0);
wait(5000);
finch.setLED(255, 255, 255);
wait(5000);
finch.setLED(0, 0, 0);
wait(5000);

// Traffic Light
var length = 5;
var a = length + 1;
for (var i = 1; i < a; i += 1) {
    finch.setLED(255, 0, 0);
    wait(3000);
    finch.setLED(0, 255, 0);
    wait(3000);
    finch.setLED(255, 255, 0);
    wait(3000);
}

finch.setLED(0, 0, 0);
wait(5000);
finch.setLED(255, 255, 255);
wait(5000);
finch.setLED(0, 0, 0);
wait(5000);
finch.setLED(255, 255, 255);
wait(5000);
finch.setLED(0, 0, 0);
wait(5000);
finch.setLED(255, 255, 255);
wait(5000);
finch.setLED(0, 0, 0);
wait(5000);

// Light show
// Write your own code here to create a light show of your choosing
var time = 3;
var c = 1 + time;
for (var b = 1; b < c; b += 1) {
    finch.setLED(255, 255, 255);
    wait(3000);

    finch.setLED(255, 0, 0);
    wait(500);
    finch.setLED(255, 255, 255);
    wait(500);
    finch.setLED(255, 0, 0);
    wait(500);
    finch.setLED(255, 255, 255);
    wait(500);
    finch.setLED(255, 0, 0);
    wait(500);
    finch.setLED(255, 255, 255);
    wait(500);
    finch.setLED(255, 0, 0);
    wait(3000);

    finch.setLED(0, 0, 255);
    wait(500);
    finch.setLED(255, 0, 0);
    wait(500);
    finch.setLED(0, 0, 255);
    wait(500);
    finch.setLED(255, 0, 0);
    wait(500);
    finch.setLED(0, 0, 255);
    wait(500);
    finch.setLED(255, 0, 0);
    wait(500);
    finch.setLED(255, 0, 255);
    wait(3000);

    finch.setLED(0, 255, 255);
    wait(500);
    finch.setLED(255, 0, 255);
    wait(500);
    finch.setLED(0, 255, 255);
    wait(500);
    finch.setLED(255, 0, 255);
    wait(500);
    finch.setLED(0, 255, 255);
    wait(500);
    finch.setLED(255, 0, 255);
    wait(500);
    finch.setLED(0, 0, 255);
    wait(3000);

    finch.setLED(0, 255, 0);
    wait(500);
    finch.setLED(0, 0, 255);
    wait(500);
    finch.setLED(0, 255, 0);
    wait(500);
    finch.setLED(0, 0, 255);
    wait(500);
    finch.setLED(0, 255, 0);
    wait(500);
    finch.setLED(0, 0, 255);
    wait(500);
    finch.setLED(0, 255, 255);
    wait(3000);

    finch.setLED(255, 255, 0);
    wait(500);
    finch.setLED(0, 255, 255);
    wait(500);
    finch.setLED(255, 255, 0);
    wait(500);
    finch.setLED(0, 255, 255);
    wait(500);
    finch.setLED(255, 255, 0);
    wait(500);
    finch.setLED(0, 255, 255);
    wait(500);
    finch.setLED(0, 255, 0);
    wait(3000);

    finch.setLED(255, 0, 0);
    wait(500);
    finch.setLED(0, 255, 0);
    wait(500);
    finch.setLED(255, 0, 0);
    wait(500);
    finch.setLED(0, 255, 0);
    wait(500);
    finch.setLED(255, 0, 0);
    wait(500);
    finch.setLED(0, 255, 0);
    wait(500);
    finch.setLED(255, 255, 0);
    wait(3000);

    finch.setLED(255, 0, 0);
    wait(500);
    finch.setLED(0, 255, 0);
    wait(500);
    finch.setLED(0, 0, 255);
    wait(500);
    finch.setLED(255, 0, 0);
    wait(500);
    finch.setLED(0, 255, 0);
    wait(500);
    finch.setLED(0, 0, 255);
    wait(500);
    finch.setLED(255, 255, 255);
    wait(3000);
}

function wait(msecs, buffer) {
    var buf = buffer ? buffer : 100;
    var time1 = new Date().getTime();
    var time2 = new Date().getTime();
    while (time2 < time1 + msecs + buf) {
        time2 = new Date().getTime();
    }
}
