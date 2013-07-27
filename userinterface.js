goog.require('lime.Layer');

UserInterface = function(gameObj) {
	goog.base(this);
	this.setAnchorPoint(0,0);
	this.setSize(gameObj.tile_size*gameObj.userInterfaceLayer_w,
		gameObj.tile_size*gameObj.userInterfaceLayer_h);

	var uiBackground = new lime.Sprite()
		.setSize(gameObj.tile_size*gameObj.userInterfaceLayer_w,
			gameObj.tile_size*gameObj.userInterfaceLayer_h)
        .setFill('#c00')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*0,
			gameObj.tile_size*54);

	this.appendChild(uiBackground);
}