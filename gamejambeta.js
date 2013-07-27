goog.provide('gamejambeta');

goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.Circle');
goog.require('lime.Label');
goog.require('lime.animation.Spawn');
goog.require('lime.animation.FadeTo');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.MoveTo');


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
        //naturalDisasterQueue = new gamejambeta.NaturalDisasterQueue(gameObj),
        //colony = new gamejambeta.Colony(gameObj)
        userInterface = createUserInterface(gameObj);

    scene.appendChild(userInterface);

	director.makeMobileWebAppCapable();

    lime.scheduleManager.schedule(function(dt) {
        //gamejambeta.NaturalDisaster.scheduleShit(dt);
    },this);


	// set current scene active
	director.replaceScene(scene);

}


/* Case 1: Falling Shit
 * Case 2: Aliens
 * Case 3: Electric Storm
 */

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('gamejambeta.start', gamejambeta.start);
