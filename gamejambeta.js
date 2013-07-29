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

    var disasterTimes = [1500,2000,2500];

    var gameObj = {
        tile_size: 16,
        num_tiles_x: 80,
        num_tiles_y: 64,
        width: 1280,
        height: 1024,
        userInterfaceLayer_w: 1280, 
        userInterfaceLayer_h: 160
    }

    var director = new lime.Director(document.body,gameObj.width,gameObj.height),
        scene = new lime.Scene(),
        naturalDisasterQueue = new NaturalDisasterQueue(gameObj),
        colony = new Colony(gameObj),
        userInterface = createUserInterface(gameObj),
        map = createMap(gameObj),
        timeCounter = 0,
        damageOverTime = 1,
        eventTimer = 0;

    scene.appendChild(map);
    scene.appendChild(userInterface);

    director.makeMobileWebAppCapable();

    lime.scheduleManager.schedule(function(dt) {
        timeCounter += dt;
        if(timeCounter > 1000){
            timeCounter = 0;
            damageOverTime += 0.1;
            var res = colony.getResources();
            colony.updateHealth(Math.floor(damageOverTime),0,userInterface.getChildAt(20));
        }
        eventTimer -= dt;
        if(eventTimer<=0){
            var disaster = NaturalDisasterQueue.deque;
            eventTimer = disaster.timer;
            colony.updateHealth(disaster.damage,0,userInterface.getChildAt(20));
        }
    },this);

    addUiButtonEventListener(colony, {
        buildingType: "resource",
        updateType: "upgrade",
        mapLayerObject: map.getChildAt(1),
        uiLayerObject: userInterface.getChildAt(7),
        uiResourcesDisplay: userInterface.getChildAt(21)
    });

    addUiButtonEventListener(colony, {
        buildingType: "alien",
        updateType: "upgrade",
        mapLayerObject: map.getChildAt(2),
        uiLayerObject: userInterface.getChildAt(8),
        uiResourcesDisplay: userInterface.getChildAt(21)
    });

    addUiButtonEventListener(colony, {
        buildingType: "prediction",
        updateType: "upgrade",
        mapLayerObject: map.getChildAt(3),
        uiLayerObject: userInterface.getChildAt(9),
        uiResourcesDisplay: userInterface.getChildAt(21)
    });

    addUiButtonEventListener(colony, {
        buildingType: "health",
        updateType: "upgrade",
        mapLayerObject: map.getChildAt(4),
        uiLayerObject: userInterface.getChildAt(10),
        uiResourcesDisplay: userInterface.getChildAt(21)
    });

    addUiButtonEventListener(colony, {
        buildingType: "asteroid",
        updateType: "upgrade",
        mapLayerObject: map.getChildAt(5),
        uiLayerObject: userInterface.getChildAt(11),
        uiResourcesDisplay: userInterface.getChildAt(21)
    });

    addUiButtonEventListener(colony, {
        buildingType: "storm",
        updateType: "upgrade",
        mapLayerObject: map.getChildAt(6),
        uiLayerObject: userInterface.getChildAt(12),
        uiResourcesDisplay: userInterface.getChildAt(21)
    });

    addUiButtonEventListener(colony, {
        buildingType: "resource",
        updateType: "downgrade",
        mapLayerObject: map.getChildAt(1),
        uiLayerObject: userInterface.getChildAt(13),
        uiResourcesDisplay: userInterface.getChildAt(21)
    });

    addUiButtonEventListener(colony, {
        buildingType: "alien",
        updateType: "downgrade",
        mapLayerObject: map.getChildAt(2),
        uiLayerObject: userInterface.getChildAt(14),
        uiResourcesDisplay: userInterface.getChildAt(21)
    });

    addUiButtonEventListener(colony, {
        buildingType: "prediction",
        updateType: "downgrade",
        mapLayerObject: map.getChildAt(3),
        uiLayerObject: userInterface.getChildAt(15),
        uiResourcesDisplay: userInterface.getChildAt(21)
    });

    addUiButtonEventListener(colony, {
        buildingType: "health",
        updateType: "downgrade",
        mapLayerObject: map.getChildAt(4),
        uiLayerObject: userInterface.getChildAt(16),
        uiResourcesDisplay: userInterface.getChildAt(21)
    });

    addUiButtonEventListener(colony, {
        buildingType: "asteroid",
        updateType: "downgrade",
        mapLayerObject: map.getChildAt(5),
        uiLayerObject: userInterface.getChildAt(17),
        uiResourcesDisplay: userInterface.getChildAt(21)
    });

    addUiButtonEventListener(colony, {
        buildingType: "storm",
        updateType: "downgrade",
        mapLayerObject: map.getChildAt(6),
        uiLayerObject: userInterface.getChildAt(18),
        uiResourcesDisplay: userInterface.getChildAt(21)
    });
    
    colony.updateHealth(0, 10, userInterface.getChildAt(21));

    // set current scene active
    director.replaceScene(scene);
}

function addUiButtonEventListener(colony, uiButtonParams) {
    goog.events.listen(uiButtonParams.uiLayerObject, ['mousedown','touchstart'], function(e) {

        var resources = colony.getResources();

        if(colony.isPossibleUpgrade(uiButtonParams.buildingType) 
            && uiButtonParams.updateType === "upgrade") {
            resources = colony.updateBuilding(uiButtonParams);
        }
        else if(colony.isPossibleDowngrade(uiButtonParams.buildingType)
            && uiButtonParams.updateType === "downgrade") {
            resources = colony.updateBuilding(uiButtonParams);
        }

        uiButtonParams.uiResourcesDisplay.setText("Resources: " + resources);

        // e.swallow(['mouseup','touchend','touchcancel'], function() {
        //     uiButtonParams.uiLayerObject.setFill('#0c0');
        // });
    });
}


/* Case 1: Falling Shit
 * Case 2: Aliens
 * Case 3: Electric Storm
 */

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('gamejambeta.start', gamejambeta.start);

