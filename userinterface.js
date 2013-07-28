goog.require('lime.Layer');

function createUserInterface(gameObj) {
	var userInterface = new lime.Layer();
	userInterface.setAnchorPoint(0,0);
	userInterface.setSize(gameObj.tile_size*gameObj.userInterfaceLayer_w,
		gameObj.tile_size*gameObj.userInterfaceLayer_h);

	var uiBackground = new lime.Sprite()
		.setSize(gameObj.tile_size * gameObj.userInterfaceLayer_w,
			gameObj.tile_size * gameObj.userInterfaceLayer_h)
        .setFill('img/uiBackground.png')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*0,
			gameObj.tile_size*54);

    var upgradeUiResourceBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*4)
        .setFill('#0c0')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*1,
			gameObj.tile_size*55);

    var upgradeUiHealthBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*4)
        .setFill('#0c0')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*11,
			gameObj.tile_size*55);

    var upgradeUiPredictorBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*4)
        .setFill('#0c0')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*21,
			gameObj.tile_size*55);

    var upgradeUiAsteroidBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*4)
        .setFill('#0c0')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*31,
			gameObj.tile_size*55);

    var upgradeUiAlienBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*4)
        .setFill('#0c0')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*41,
			gameObj.tile_size*55);

    var upgradeUiStormBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*4)
        .setFill('#0c0')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*51,
			gameObj.tile_size*55);

    var downgradeUiResourceBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*4)
        .setFill('#0c0')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*1,
			gameObj.tile_size*60);

    var downgradeUiHealthBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*4)
        .setFill('#0c0')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*11,
			gameObj.tile_size*60);

    var downgradeUiPredictorBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*4)
        .setFill('#0c0')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*21,
			gameObj.tile_size*60);

    var downgradeUiAsteroidBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*4)
	    .setFill('#0c0')
	    .setAnchorPoint(0,0)
	    .setPosition(gameObj.tile_size*31,
			gameObj.tile_size*60);

    var downgradeUiAlienBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*4)
	    .setFill('#0c0')
	    .setAnchorPoint(0,0)
	    .setPosition(gameObj.tile_size*41,
			gameObj.tile_size*60);

    var downgradeUiStormBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*4)
        .setFill('#0c0')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*51,
			gameObj.tile_size*60);

    var uiHealthBar = new lime.Sprite()
    	.setSize(gameObj.tile_size * 78,
    		gameObj.tile_size * 4)
    	.setFill("img/uiHealthBar.png")
    	.setAnchorPoint(0, 0)
    	.setPosition(gameObj.tile_size, 0);

   	var uiHealth = new lime.Sprite()
   		.setSize(gameObj.tile_size * 76,
   			gameObj.tile_size * 2)
   		.setFill("img/uiHealth.png")
   		.setAnchorPoint(0, 0)
   		.setPosition(gameObj.tile_size * 2, gameObj.tile_size);


	userInterface.appendChild(uiBackground);
	userInterface.appendChild(upgradeUiResourceBuildingButton);
	userInterface.appendChild(upgradeUiHealthBuildingButton);
	userInterface.appendChild(upgradeUiPredictorBuildingButton);
	userInterface.appendChild(upgradeUiAsteroidBuildingButton);
	userInterface.appendChild(upgradeUiAlienBuildingButton);
	userInterface.appendChild(upgradeUiStormBuildingButton);
	userInterface.appendChild(downgradeUiResourceBuildingButton);
	userInterface.appendChild(downgradeUiHealthBuildingButton);
	userInterface.appendChild(downgradeUiPredictorBuildingButton);
	userInterface.appendChild(downgradeUiAsteroidBuildingButton);
	userInterface.appendChild(downgradeUiAlienBuildingButton);
	userInterface.appendChild(downgradeUiStormBuildingButton);
	userInterface.appendChild(uiHealthBar);
	userInterface.appendChild(uiHealth);
		

	return userInterface;
}