var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x, y){
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone);

    var obstacleImage = draw.bitmap("img/sawblade.png");
    sawBladeHitZone.addChild(obstacleImage);

    obstacleImage.x = -x;
    obstacleImage.y = -y;
    }
    createSawBlade(400, 100)
    
    function createEnemy(x, y){
      var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChile(redSquare);
    enemy.x = 400;
    enemy.y = groundY- 50;
    
    game.addGameItem(enemy);

    enemy.onPlayerCollision = function(){
      game.changeIntegrity(-10)
    }

    enemy.onProjectileCollision = function(){
      game.increaseScore(100);
      enemy.fadeout();
    }
    }
    createEnemy(400, groundY - 10)
    createEnemy(800, groundY - 100)
    createEnemy(1200, groundY - 50)

    function createReward(){
      //TODO REWARD STEP 10
      //when hellebot collides with it, it should either increase score or health
      //should disappear
    }
    function createMarker(){
      //TODO MARKER STEP 11
    }

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
