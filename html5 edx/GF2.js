// Inits
window.onload = function init() {
  var game = new GF();  //new object of the game allow more people to play at onceconstructor function
  game.start();
};


// GAME FRAMEWORK STARTS HERE
var GF = function(){
    // Vars relative to the canvas
    var canvas, ctx, w, h; 
    // Array of balls to animate
    var ballArray = [];

//init    
function init() {
  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext('2d');
  width = canvas.width;
  height = canvas.height;
  // try to change this number
  createBalls(16);

  requestAnimationFrame(mainLoop);
}    
function createBalls(numberOfBalls) {
  for(var i=0; i < numberOfBalls; i++) {
    // Create a ball with random position and speed.
    // You can change the radius
    var ball = new Ball(width*Math.random(),
                        height*Math.random(),
              (2*Math.PI)*Math.random(), // angle
              (10*Math.random())-5,      // speed
                        30);
   // We add it in an array
   ballArray[i] = ball;
  }
}

function mainLoop() {
  // clear the canvas
  ctx.clearRect(0, 0, width, height);
  // for each ball in the array
  for(var i=0; i < ballArray.length; i++) {
    var ball = ballArray[i]; 
    // 1) move the ball
    ball.move();
    // 2) test if the ball collides with a wall
    testCollisionWithWalls(ball);
    // 3) draw the ball
    ball.draw();
  }
    // ask for a new frame of animation at 60f/s
  window.requestAnimationFrame(mainLoop);
}
function testCollisionWithWalls(ball) {
  // left
  if (ball.x < ball.radius) { // x and y of the ball are at the center of the circle
    ball.x = ball.radius;     // if collision, we replace the ball at a position
    ball.vx *= -1;            // where it's exactly in contact with the left border
  }                           // and we reverse the horizontal speed
  // right
  if (ball.x > width - (ball.radius)) {
    ball.x = width - (ball.radius);
    ball.vx *= -1;
  }
  // up
  if (ball.y < ball.radius) {
    ball.y = ball.radius;
    ball.vy *= -1;
  }
  // down
  if (ball.y > height - (ball.radius)) {
    ball.y = height - (ball.radius);
    ball.vy *= -1;
  }
}
    // vars for counting frames/s, used by the measureFPS function
    var frameCount = 0;
    var lastTime;
    var fpsContainer;
    var fps; 
    //vars for handling input
    var inputStates ={};
    // The monster!
    var monster = {
      x:10,
      y:10,
      speed:1
    };
    var measureFPS = function(newTime){
      
         // test for the very first invocation
         if(lastTime === undefined) {
           lastTime = newTime; 
           return;
         }
      
        //calculate the difference between last & current frame
        var diffTime = newTime - lastTime; 

        if (diffTime >= 1000) {
            fps = frameCount;    
            frameCount = 0;
            lastTime = newTime;
        }

        //and display it in an element we appended to the 
        // document in the start() function
       fpsContainer.innerHTML = 'FPS: ' + fps; 
       frameCount++;
    };
  
     // clears the canvas content
     function clearCanvas() {
       ctx.clearRect(0, 0, w, h);
     }
  
     // Functions for drawing the monster and maybe other objects
     function drawMyMonster(x, y) {
       // draw a big monster !
       // head
   
       // save the context
       ctx.save();
  
       // translate the coordinate system, draw relative to it
       ctx.translate(x, y);
  
       // (0, 0) is the top left corner of the monster.
       ctx.strokeRect(0, 0, 100, 100);
  
       // eyes
       ctx.fillRect(20, 20, 10, 10);
       ctx.fillRect(65, 20, 10, 10);
  
       // nose
       ctx.strokeRect(45, 40, 10, 40);
  
       // mouth
       ctx.strokeRect(35, 84, 30, 10);
  
       // teeth
       ctx.fillRect(38, 84, 10, 10);
       ctx.fillRect(52, 84, 10, 10);
  
      // restore the context
      ctx.restore(); 
    }
  
    var mainLoop = function(time){
        //main function, called each frame 
        measureFPS(time);
      
        // Clear the canvas
        clearCanvas();
        
        // draw the monster
  drawMyMonster(monster.x, monster.y);

  // Checks inputs and moves the monster
  updateMonsterPosition();
 
        // call the animation loop every 1/60th of second
        requestAnimationFrame(mainLoop);
    };

  function updateMonsterPosition() {
   monster.speedX = monster.speedY = 0;
    if (inputStates.left) {
     // ctx.fillText("left", 150, 20);
       monster.speedX = -monster.speed;
    }
    if (inputStates.up) {
    //  ctx.fillText("up", 150, 50);
       monster.speedY = -monster.speed;
    }
   if (inputStates.right) {
    //  ctx.fillText("right", 150, 80);
       monster.speedX = monster.speed;
   }
   if (inputStates.down) {
    // ctx.fillText("down", 150, 120);
      monster.speedY = monster.speed;
   }
   if (inputStates.space) {
    // ctx.fillText("space bar", 140, 150);
   }

    if (inputStates.mousePos) { 
            ctx.fillText("x = " + inputStates.mousePos.x + 
              " y = " + inputStates.mousePos.y, 5, 150);
    }
      if (inputStates.mousedown) { 
            ctx.fillText("mousedown b" + inputStates.mouseButton, 5, 180);
            monster.speed = 5;
        } else {
          //mouseup
          monster.speed = 1;
        }
        monster.x += monster.speedX;
        monster.y += monster.speedY;
};
  function getMousePos(evt) {
    // Necessary to take into account CSS boudaries
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
    var start = function(){
        // adds a div for displaying the fps value
        fpsContainer = document.createElement('div');
        document.body.appendChild(fpsContainer);
      
        // Canvas, context etc.
        canvas = document.querySelector("#myCanvas");
  
        // often useful
        w = canvas.width; 
        h = canvas.height;  
  
        // important, we will draw with this object
        ctx = canvas.getContext('2d');

    // Default police for text
    ctx.font="20px Arial";

        // Add the listener to the main, window object, and update the states
    window.addEventListener('keydown', function(event){
      if (event.keyCode === 37) {
        inputStates.left = true;
      } else if (event.keyCode === 38) {
        inputStates.up = true;
      } else if (event.keyCode === 39) {
        inputStates.right = true;
      } else if (event.keyCode === 40) {
        inputStates.down = true;
      } else if (event.keyCode === 32) {
        inputStates.space = true;
      }
    }, false);
        // If the key is released, change the states object
    window.addEventListener('keyup', function(event){
      if (event.keyCode === 37) {
        inputStates.left = false;
      } else if (event.keyCode === 38) {
        inputStates.up = false;
      } else if (event.keyCode === 39) {
        inputStates.right = false;
      } else if (event.keyCode === 40) {
        inputStates.down = false;
      } else if (event.keyCode === 32) {
        inputStates.space = false;
      }
    }, false);  
          // Mouse event listeners
      canvas.addEventListener('mousemove', function (evt) {
          inputStates.mousePos = getMousePos(evt);
      }, false);

      canvas.addEventListener('mousedown', function (evt) {
            inputStates.mousedown = true;
            inputStates.mouseButton = evt.button;
      }, false);

      canvas.addEventListener('mouseup', function (evt) {
          inputStates.mousedown = false;
      }, false);         
        // start the animation
        requestAnimationFrame(mainLoop);
    };

    //our GameFramework returns a public API visible from outside its scope
    return {
        start: start
    };
};
