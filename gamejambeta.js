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

    addUiButtonEventListener(colony, {
        buildingType: "resource",
        updateType: "upgrade",
        mapLayerObject: map.getChildAt(0),
        uiLayerObject: userInterface.getChildAt(1)
    });

    addUiButtonEventListener(colony, {
        buildingType: "alien",
        updateType: "upgrade",
        mapLayerObject: map.getChildAt(1),
        uiLayerObject: userInterface.getChildAt(2)
    });

    addUiButtonEventListener(colony, {
        buildingType: "resource",
        updateType: "downgrade",
        mapLayerObject: map.getChildAt(0),
        uiLayerObject: userInterface.getChildAt(7)
    });

    addUiButtonEventListener(colony, {
        buildingType: "alien",
        updateType: "downgrade",
        mapLayerObject: map.getChildAt(1),
        uiLayerObject: userInterface.getChildAt(8)
    });
    
    // set current scene active
    director.replaceScene(scene);

}

function addUiButtonEventListener(colony, uiButtonParams) {
    goog.events.listen(uiButtonParams.uiLayerObject, ['mousedown','touchstart'], function(e) {
        uiButtonParams.uiLayerObject.setFill('#00c');

        if(colony.isPossibleUpgrade(uiButtonParams.buildingType)) {
            colony.updateBuilding(uiButtonParams);
        }

        e.swallow(['mouseup','touchend','touchcancel'], function() {
            uiButtonParams.uiLayerObject.setFill('#0c0');
        });
    });
}


/* Case 1: Falling Shit
 * Case 2: Aliens
 * Case 3: Electric Storm
 */

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('gamejambeta.start', gamejambeta.start);

