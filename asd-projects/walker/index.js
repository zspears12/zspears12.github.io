/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  var KEY = {
    //arrows
    "ENTER": 13,
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40,
  }
  var walker = {
    "positionX": 0,
    "positionY": 0,
    "speedX": 0,
    "speedY": 0,
  }
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    wallCollision()
    redrawGameItem()
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.ENTER) {
      console.log("enter pressed");
    } 
    //arrows
    else if (event.which === KEY.LEFT){
      walker.speedX = -5
      console.log("Left pressed")
    } else if (event.which === KEY.UP){
      walker.speedY = -5
      console.log("Up pressed")
    } else if (event.which === KEY.RIGHT){
      walker.speedX = 5
      console.log("Right pressed")
    } else if (event.which === KEY.DOWN){
      walker.speedY = 5
      console.log("Down pressed")
    } 

     /* else if (event.which === KEY.A){
      walker2.speedX = -5
      console.log("A pressed")
    } else if (event.which === KEY.W){
      walker2.speedY = -5
      console.log("W pressed")
    } else if (event.which === KEY.D){
      walker2.speedX = 5
      console.log("D pressed")
    } else if (event.which === KEY.S){
      walker2.speedY = 5
      console.log("S pressed")
    } */
}
  
  function handleKeyUp(event){
    if (event.which === KEY.ENTER){
      console.log("Enter released")
  } 
  //arrows
  else if (event.which === KEY.LEFT){
    walker.speedX = 0
    console.log("Left released")
  } else if (event.which === KEY.UP){
    walker.speedY = 0
    console.log("Up released")
  } else if (event.which === KEY.RIGHT){
    walker.speedX = 0
    console.log("Right released")
  } else if (event.which === KEY.DOWN){
    walker.speedY = 0
    console.log("Down released")
  }
  //WASD
  /*else if (event.which === KEY.A){
    walker2.speedX = 0
    console.log("A pressed")
  } else if (event.which === KEY.W){
    walker2.speedY = 0
    console.log("W pressed")
  } else if (event.which === KEY.D){
    walker2.speedX = 0
    console.log("D pressed")
  } else if (event.which === KEY.S){
    walker2.speedY = 0
    console.log("S pressed")
  }*/
}

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem(){
    //walker
    walker.positionX += walker.speedX
    walker.positionY += walker.speedY
    //walker2
    /*
    walker2.positionX += walker2.speedX
    walker2.positionY += walker2.speedY
    */
  }

  function redrawGameItem(){
    //walker
    $("#walker").css("left", walker.positionX)
    $("#walker").css("right", walker.positionX)
    $("#walker").css("top", walker.positionY)
    $("#walker").css("bottom", walker.positionY)
    //walker2
    /*
    $("#walker").css("left", walker2.positionX)
    $("#walker").css("right", walker2.positionX)
    $("#walker").css("top", walker2.positionY)
    $("#walker").css("bottom", walker2.positionY)
    */
  }

  function wallCollision(){
    //walker
    if (walker.positionX < 0){
      walker.positionX = 0
    }
    if (walker.positionX > $("#board").width() - 50){
      walker.positionX = $("#board").width() - 50
    }
    if (walker.positionY < 0){
      walker.positionY = 0
    }
    if (walker.positionY > $("#board").height() - 50){
      walker.positionY = $("#board").height() - 50
    }

    //walker2
    /*
    if (walker2.positionX < 0){
      walker.positionX = 0
    }
    if (walker2.positionX > $("#board").width() - 50){
      walker.positionX = $("#board").width() - 50
    }
    if (walker2.positionY < 0){
      walker.positionY = 0
    }
    if (walker2.positionY > $("#board").height() - 50){
      walker.positionY = $("#board").height() - 50
    }
      */
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}

