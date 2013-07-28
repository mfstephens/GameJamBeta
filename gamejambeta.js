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

    for(var i = 1; i <= 12; ++i) {
        addUiButtonEventListener(colony, map.getChildAt(i), userInterface.getChildAt(i));
    }
    
    // set current scene active
    director.replaceScene(scene);

}

function addUiButtonEventListener(colony, mapLayerObject, uiLayerObject) {
    goog.events.listen(uiLayerObject, ['mousedown','touchstart'], function(e) {
        uiLayerObject.setFill('#00c');

        if(colony.isPossibleUpgrade("resource")) {
            colony.updateBuilding({
                buildingType: "resource",
                updateType: "upgrade",
                mapLayerObject: mapLayerObject,
                uiLayerObject: uiLayerObject
            });
        }

        e.swallow(['mouseup','touchend','touchcancel'], function() {
            uiLayerObject.setFill('#0c0');
        });
    });
}


/* Case 1: Falling Shit
 * Case 2: Aliens
 * Case 3: Electric Storm
 */

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('gamejambeta.start', gamejambeta.start);

