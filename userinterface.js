goog.provide('gamejambeta.UserInterface');

goog.require('lime.Layer');

gamejambeta.UserInterface = function(gameObj) {
	goog.base(this);
	this.setAnchorPoint(0,0);
	
	var uiBackground = new lime.Sprite()
		.setSize(gameObj.tile_size*gameObj.userInterfaceLayer_w,
			gameObj.tile_size*gameObj.userInterfaceLayer_h)
        .setFill('#c00')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*0,
			gameObj.tile_size*54);

	this.setSize(gameObj.tile_size*gameObj.userInterfaceLayer_w,
		gameObj.tile_size*gameObj.userInterfaceLayer_h);

	this.appendChild(uiBackground);
}

goog.inherits(gamejambeta.UserInterface,lime.Layer);