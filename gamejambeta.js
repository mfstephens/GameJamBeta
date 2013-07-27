//set main namespace
goog.provide('gamejambeta');


//get requirements
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
        tile_size: 64,
        num_tiles_x: 20,
        num_tiles_y: 16,
        width: num_tiles_x*tile_size,   //1280
        height: num_tiles_y*tile_size,  //1024
        userInterfaceLayer_w: tile_size*5, 
        userInterfaceLayer_h: tile_size*6
    }

	var director = new lime.Director(document.body,1024,768),
	    scene = new lime.Scene(),
        naturalDisasterQueue = new gamejambeta.NaturalDisasterQueue(gameObj),
        colony = new gamejambeta.colony(gameObj)
        userInterface = new gamejambeta.UserInterface(gameObj);

	director.makeMobileWebAppCapable();

    //add some interaction

    lime.scheduleManager.schedule(function(dt) {
        gamejambeta.NaturalDisaster.scheduleShit(dt);

    },this);


	// set current scene active
	director.replaceScene(scene);

}


//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('gamejambeta.start', gamejambeta.start);
