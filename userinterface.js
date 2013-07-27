goog.require('lime.Layer');

function createUserInterface(gameObj) {
	var userInterface = new lime.Layer();
	userInterface.setAnchorPoint(0,0);
	userInterface.setSize(gameObj.tile_size*gameObj.userInterfaceLayer_w,
		gameObj.tile_size*gameObj.userInterfaceLayer_h);

	var uiBackground = new lime.Sprite()
		.setSize(gameObj.tile_size*gameObj.userInterfaceLayer_w,
			gameObj.tile_size*gameObj.userInterfaceLayer_h)
        .setFill('#c00')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*0,
			gameObj.tile_size*54);

	userInterface.appendChild(uiBackground);

	return userInterface;
}