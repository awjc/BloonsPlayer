// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");
var sleep = require('sleep');


// Speed up the mouse.
robot.setMouseDelay(1);

var screenSize = robot.getScreenSize();

// 3 second wait before rudely taking over the mouse and keyboard
var initialWait = 3;
console.log("Program initialized. Assuming input control in " + initialWait + " seconds.")
sleep.sleep(initialWait);
console.log("Starting...");

playMonkeyLaneEasy();

function playMonkeyLaneEasy() {
  var startLevel = 1;
  var endLevel = 8;
  for (var i = startLevel; i <= endLevel; i++) {
    console.log("Playing level " + i + ".")
    playLevel(i);

    // Make sure we're playing in fast motion
    if (i === startLevel) {
      robot.keyTap("space");
    }
    afterLevelSleep(i);
  }
}

function playLevel(levelNum) {
  var functionName = "level" + levelNum;
  eval(functionName + "()");
}

function startPlayingLevel() {
  robot.keyTap("space");
}

function afterLevelSleep(levelNum) {
  var functionName = "sleep" + levelNum;
  eval(functionName + "()");
}

function level1() {
  robot.keyTap("T");
  robot.moveMouseSmooth(842, 744);
  robot.mouseClick();
  robot.keyTap("escape");
  startPlayingLevel();
}
function sleep1() {
  sleep.sleep(7);
}

function level2() {
  robot.moveMouseSmooth(842, 744);
  robot.mouseClick();
  moveMouseToLeftUpgrade();
  robot.mouseClick();
  robot.keyTap("escape");
  startPlayingLevel();
}
function sleep2() {
  sleep.sleep(7);
}

function level3() {
  startPlayingLevel();
}
function sleep3() {
  sleep.sleep(8);
}

function level4() {
  startPlayingLevel();
}
function sleep4() {
  sleep.sleep(8);
}

function level5() {
  robot.moveMouseSmooth(842, 744);
  robot.mouseClick();
  moveMouseToLeftUpgrade();
  robot.mouseClick();
  robot.keyTap("escape");
  startPlayingLevel();
}
function sleep5() {
  sleep.sleep(8);
}

function level6() {
  startPlayingLevel();
}
function sleep6() {
  sleep.sleep(10);
}

function level7() {
  startPlayingLevel();
}
function sleep7() {
  sleep.sleep(10);
}

function level8() {
  robot.moveMouseSmooth(842, 744);
  robot.mouseClick();
  moveMouseToLeftUpgrade();
  robot.mouseClick();
  robot.keyTap("escape");
  startPlayingLevel();
}
function sleep8() {
  sleep.sleep(8);
}

// Utility stuff

function moveMouseToLeftUpgrade() {
  constants = {
    leftUpg: {x: 1398, y:1331 },
    rightUpg: {x: 1777, y: 1331}
  }
  robot.moveMouseSmooth(constants.leftUpg.x, constants.leftUpg.y);
}

function moveMouseToRightUpgrade() {
  constants = {
    leftUpg: {x: 1398, y:1331 },
    rightUpg: {x: 1777, y: 1331}
  }
  robot.moveMouseSmooth(constants.rightUpg.x, constants.rightUpg.y);
}
