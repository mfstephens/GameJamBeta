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
        userInterface = createUserInterface(gameObj);

    scene.appendChild(userInterface);

    director.makeMobileWebAppCapable();

    lime.scheduleManager.schedule(function(dt) {
        //gamejambeta.NaturalDisaster.scheduleShit(dt);
    },this);

    goog.events.listen(userInterface.getChildAt(1),['mousedown','touchstart'],function(e){
    userInterface.getChildAt(1).setFill('#00c');

    colony.resourceBuilding.upgrade();

    e.swallow(['mouseup','touchend','touchcancel'],function(){
        userInterface.getChildAt(1).setFill('#0c0');
    })
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

