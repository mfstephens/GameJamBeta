//set main namespace
goog.provide('gamejambeta');

//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.Circle');
goog.require('lime.Label');

// entrypoint
gamejambeta.start = function(){

    var gameObj = {
        tile_size: 16,
        num_tiles_x: 80,
        num_tiles_y: 64,
        width: 1280,
        height: 1024,
        userInterfaceLayer_w: 1280, 
        userInterfaceLayer_h: 160
    }

    var playerObj = {
        resources: 100,
        health: 100
    }

    var director = new lime.Director(document.body,gameObj.width,gameObj.height),
        scene = new lime.Scene(),
        //naturalDisasterQueue = new NaturalDisasterQueue(gameObj),
        colony = new Colony,
        userInterface = createUserInterface(gameObj),
        map = createMap(gameObj);

    scene.appendChild(userInterface);
    scene.appendChild(map);

    director.makeMobileWebAppCapable();

    lime.scheduleManager.schedule(function(dt) {
        //gamejambeta.NaturalDisaster.scheduleShit(dt);
    },this);

    goog.events.listen(userInterface.getChildAt(1), ['mousedown','touchstart'], function(e) {
        userInterface.getChildAt(1).setFill('#00c');

        if(playerObj.resources >= colony.resourceBuilding.getNextUpgradeCost()) {
            playerObj.resources -= colony.resourceBuilding.getNextUpgradeCost();
            colony.resourceBuilding.upgrade();
            map.getChildAt(1).setFill('img/resourceBuilding.png');
        }

        e.swallow(['mouseup','touchend','touchcancel'], function() {
            userInterface.getChildAt(1).setFill('#0c0');
        });
    });

    goog.events.listen(userInterface.getChildAt(2), ['mousedown','touchstart'], function(e) {
        userInterface.getChildAt(2).setFill('#00c');

        if(playerObj.resources >= colony.healthBuffBuilding.getNextUpgradeCost()) {
            playerObj.resources -= colony.healthBuffBuilding.getNextUpgradeCost();
            colony.healthBuffBuilding.upgrade();
        }

        e.swallow(['mouseup','touchend','touchcancel'], function() {
            userInterface.getChildAt(2).setFill('#0c0');
        });
    });

    goog.events.listen(userInterface.getChildAt(3), ['mousedown','touchstart'], function(e) {
        userInterface.getChildAt(3).setFill('#00c');

        if(playerObj.resources >= colony.disasterPredictionBuilding.getNextUpgradeCost()) {
            playerObj.resources -= colony.disasterPredictionBuilding.getNextUpgradeCost();
            colony.disasterPredictionBuilding.upgrade();
        }

        e.swallow(['mouseup','touchend','touchcancel'], function() {
            userInterface.getChildAt(3).setFill('#0c0');
        });
    });

    goog.events.listen(userInterface.getChildAt(4), ['mousedown','touchstart'], function(e) {
        userInterface.getChildAt(4).setFill('#00c');

        if(playerObj.resources >= colony.preventAsteroidBuilding.getNextUpgradeCost()) {
            playerObj.resources -= colony.preventAsteroidBuilding.getNextUpgradeCost();
            colony.preventAsteroidBuilding.upgrade();
        }

        e.swallow(['mouseup','touchend','touchcancel'], function() {
            userInterface.getChildAt(4).setFill('#0c0');
        });
    });

    goog.events.listen(userInterface.getChildAt(5), ['mousedown','touchstart'], function(e) {
        userInterface.getChildAt(5).setFill('#00c');

        if(playerObj.resources >= colony.preventAlienBuilding.getNextUpgradeCost()) {
            playerObj.resources -= colony.preventAlienBuilding.getNextUpgradeCost();
            colony.preventAlienBuilding.upgrade();
        }

        e.swallow(['mouseup','touchend','touchcancel'], function() {
            userInterface.getChildAt(5).setFill('#0c0');
        });
    });

    goog.events.listen(userInterface.getChildAt(6), ['mousedown','touchstart'], function(e) {
        userInterface.getChildAt(6).setFill('#00c');

        if(playerObj.resources >= colony.preventStormBuilding.getNextUpgradeCost()) {
            playerObj.resources -= colony.preventStormBuilding.getNextUpgradeCost();
            colony.preventStormBuilding.upgrade();
        }

        e.swallow(['mouseup','touchend','touchcancel'], function() {
            userInterface.getChildAt(6).setFill('#0c0');
        });
    });


    // set current scene active
    director.replaceScene(scene);

}


/* Case 1: Falling Shit
 * Case 2: Aliens
 * Case 3: Electric Storm
 */

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('gamejambeta.start', gamejambeta.start);

