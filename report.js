// Report the pixel color under the mouse as it moves for a little bit
var robot = require("robotjs");

count = 300;
for (var i = 0; i < count; i++) {
  reportOnce();
}

function reportOnce() {
  // Get mouse position.
  var mouse = robot.getMousePos();

  // Get pixel color in hex format.
  var hex = robot.getPixelColor(mouse.x, mouse.y);
  console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);
}
