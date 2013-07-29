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

	var uiResourceBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*8)
	    .setFill('img/uiButtonMine.png')
	    .setAnchorPoint(0,0)
	    .setPosition(gameObj.tile_size*6,
			gameObj.tile_size*55);

	var uiPredictorBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*8)
	    .setFill('img/uiButtonAlienDefense.png')
	    .setAnchorPoint(0,0)
	    .setPosition(gameObj.tile_size*18,
			gameObj.tile_size*55);

    var uiHealthBuldingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*8)
	    .setFill('img/uiButtonSweeper.png')
	    .setAnchorPoint(0,0)
	    .setPosition(gameObj.tile_size*30,
			gameObj.tile_size*55);

	var uiAsteroidBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*8)
	    .setFill('img/uiButtonHealthBuff.png')
	    .setAnchorPoint(0,0)
	    .setPosition(gameObj.tile_size*42,
			gameObj.tile_size*55);

	var uiAlienBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*8)
	    .setAnchorPoint(0,0)
	    .setFill('img/uiButtonAsteroidsDefense.png')
	    .setPosition(gameObj.tile_size*54,
			gameObj.tile_size*55);

	var uiStormBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*8,
			gameObj.tile_size*8)
	    .setFill('img/uiButtonElectricStormDefense.png')
	    .setAnchorPoint(0,0)
	    .setPosition(gameObj.tile_size*66,
			gameObj.tile_size*55);

    var upgradeUiResourceBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*6,
			gameObj.tile_size*55);

    var upgradeUiHealthBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*18,
			gameObj.tile_size*55);

    var upgradeUiPredictorBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*30,
			gameObj.tile_size*55);

    var upgradeUiAsteroidBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*42,
			gameObj.tile_size*55);

    var upgradeUiAlienBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*54,
			gameObj.tile_size*55);

    var upgradeUiStormBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*66,
			gameObj.tile_size*55);

    var downgradeUiResourceBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*12,
			gameObj.tile_size*60);

    var downgradeUiHealthBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*24,
			gameObj.tile_size*60);

    var downgradeUiPredictorBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
  
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*36,
			gameObj.tile_size*60);

    var downgradeUiAsteroidBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
	    .setAnchorPoint(0,0)
	    .setPosition(gameObj.tile_size*48,
			gameObj.tile_size*60);

    var downgradeUiAlienBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
	    .setAnchorPoint(0,0)
	    .setPosition(gameObj.tile_size*60,
			gameObj.tile_size*60);

    var downgradeUiStormBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*72,
			gameObj.tile_size*60);

    var uiResourceBuildingLevel = new lime.Label()
    	.setText("0")
		.setFontSize(gameObj.tile_size * 3, gameObj.tile_size * 3)
		.setFontFamily("courier")
		.setFontColor("#FF3300")
		.setAnchorPoint(0, 0)
        .setPosition(gameObj.tile_size* 12, gameObj.tile_size* 55);

    var uiPredictorBuildingLevel = new lime.Label()
    	.setText("0")
		.setFontSize(gameObj.tile_size * 3, gameObj.tile_size * 3)
		.setFontFamily("courier")
		.setFontColor("#FF3300")
		.setAnchorPoint(0, 0)
        .setPosition(gameObj.tile_size* 24, gameObj.tile_size* 55);

    var uiHealthBuldingLevel = new lime.Label()
    	.setText("0")
		.setFontSize(gameObj.tile_size * 3, gameObj.tile_size * 3)
		.setFontFamily("courier")
		.setFontColor("#FF3300")
		.setAnchorPoint(0, 0)
        .setPosition(gameObj.tile_size* 36, gameObj.tile_size* 55);

    var uiAsteroidBuildingLevel = new lime.Label()
    	.setText("0")
		.setFontSize(gameObj.tile_size * 3, gameObj.tile_size * 3)
		.setFontFamily("courier")
		.setFontColor("#FF3300")
		.setAnchorPoint(0, 0)
        .setPosition(gameObj.tile_size* 48, gameObj.tile_size* 55);

    var uiAlienBuildingLevel = new lime.Label()
    	.setText("0")
		.setFontSize(gameObj.tile_size * 3, gameObj.tile_size * 3)
		.setFontFamily("courier")
		.setFontColor("#FF3300")
		.setAnchorPoint(0, 0)
        .setPosition(gameObj.tile_size* 60, gameObj.tile_size* 55);

    var uiStormBuildingLevel = new lime.Label()
    	.setText("0")
		.setFontSize(gameObj.tile_size * 3, gameObj.tile_size * 3)
		.setFontFamily("courier")
		.setFontColor("#FF3300")
		.setAnchorPoint(0, 0)
        .setPosition(gameObj.tile_size* 72, gameObj.tile_size* 55);

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

   	var uiResources = new lime.Label()
   		.setText("Resources:100")
   		.setFontFamily("courier")
   		.setFontWeight("bold")
   		.setAnchorPoint(0, 0)
   		.setFontSize(gameObj.tile_size * 3.4)
   		.setPosition(gameObj.tile_size, gameObj.tile_size * 50);

	userInterface.appendChild(uiBackground);
	userInterface.appendChild(uiResourceBuildingButton);
	userInterface.appendChild(uiPredictorBuildingButton);
	userInterface.appendChild(uiHealthBuldingButton);
	userInterface.appendChild(uiAsteroidBuildingButton);
	userInterface.appendChild(uiAlienBuildingButton);
	userInterface.appendChild(uiStormBuildingButton);
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
	userInterface.appendChild(uiResourceBuildingLevel);
	userInterface.appendChild(uiPredictorBuildingLevel);
	userInterface.appendChild(uiHealthBuldingLevel);
	userInterface.appendChild(uiAsteroidBuildingLevel);
	userInterface.appendChild(uiAlienBuildingLevel);
	userInterface.appendChild(uiStormBuildingLevel);


	userInterface.appendChild(uiHealthBar);
	userInterface.appendChild(uiHealth);
	userInterface.appendChild(uiResources);
		

	return userInterface;
}