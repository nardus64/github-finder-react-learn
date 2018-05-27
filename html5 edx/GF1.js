var canvas, ctx, w, h;
window.onload = function init() {
  // Called AFTER the page has been loaded
  var game = new GF();
  game.start();
    // Often useful
  w = canvas.width;
  h = canvas.height;}
  function drawMyMonster(x, y) {
  // Draw a big monster!
  // Head
  // BEST practice: save the context, use 2D transformations
  ctx.save();
  // Translate the coordinate system, draw relative to it
  ctx.translate(x, y);
  // (0, 0) is the top left corner of the monster.
  ctx.strokeRect(0, 0, 100, 100);
  // Eyes
  ctx.fillRect(20, 20, 10, 10);
  ctx.fillRect(65, 20, 10, 10);
  // Nose
  ctx.strokeRect(45, 40, 10, 40);
  // Mouth
  ctx.strokeRect(35, 84, 30, 10);
  // Teeth
  ctx.fillRect(38, 84, 10, 10);
  ctx.fillRect(52, 84, 10, 10);
  // BEST practice: restore the context
  ctx.restore();
}

    // Important, we will draw with this object
  ctx = canvas.getContext('2d');
var GF = function(){

    var mainLoop = function(){
        //main function, called each frame
        document.body.innerHTML = Math.random();
      
        // call the animation loop every 1/60th of second
        requestAnimationFrame(mainLoop);
    };

    var start = function(){
        requestAnimationFrame(mainLoop);
    };

    //our GameFramework returns a public API visible from outside its scope
    return {
        start: start
    };
};

var game = new GF();
game.start();
