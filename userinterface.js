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

    var uiResourceBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*8)
        .setFill('#0c0')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*1,
			gameObj.tile_size*55);

    var uiHealthBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*8)
        .setFill('#0c0')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*11,
			gameObj.tile_size*55);

    var uiPredictorBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*8)
        .setFill('#0c0')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*21,
			gameObj.tile_size*55);

    var uiAsteroidBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*8)
        .setFill('#0c0')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*31,
			gameObj.tile_size*55);

    var uiAlienBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*8)
        .setFill('#0c0')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*41,
			gameObj.tile_size*55);

    var uiStormBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*8)
        .setFill('#0c0')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*51,
			gameObj.tile_size*55);

	userInterface.appendChild(uiBackground);
	userInterface.appendChild(uiResourceBuildingButton);
	userInterface.appendChild(uiHealthBuildingButton);
	userInterface.appendChild(uiPredictorBuildingButton);
	userInterface.appendChild(uiAsteroidBuildingButton);
	userInterface.appendChild(uiAlienBuildingButton);
	userInterface.appendChild(uiStormBuildingButton);
		

	return userInterface;
}