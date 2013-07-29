goog.require('lime.Layer');
goog.require('lime.Sprite');

function createUserInterface(gameObj) {
	var userInterface = new lime.Layer();
	userInterface.setAnchorPoint(0,0);
	userInterface.setSize(gameObj.tile_size*gameObj.userInterfaceLayer_w,
		gameObj.tile_size*gameObj.userInterfaceLayer_h);

	var uiBackground = new lime.Sprite()
		.setSize(1280, 160)
        .setFill('img/uiBackground.png')
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*0,
			gameObj.tile_size*54);

    var upgradeUiResourceBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*5,
			gameObj.tile_size*55);

    var upgradeUiHealthBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*17,
			gameObj.tile_size*55);

    var upgradeUiPredictorBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*29,
			gameObj.tile_size*55);

    var upgradeUiAsteroidBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*41,
			gameObj.tile_size*55);

    var upgradeUiAlienBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*53,
			gameObj.tile_size*55);

    var upgradeUiStormBuildingButton = new lime.Sprite()
		.setSize(gameObj.tile_size*2,
			gameObj.tile_size*3)
        .setAnchorPoint(0,0)
        .setPosition(gameObj.tile_size*65,
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

   	var uiWarningArea = new lime.Layer();
		uiWarningArea.setAnchorPoint(0,0);
		uiWarningArea.setSize(gameObj.tile_size*8,gameObj.tile_size*26);
		uiWarningArea.setPosition(gameObj.tile_size*2,gameObj.tile_size*4);

	/*00*/userInterface.appendChild(uiBackground);
	/*01*/userInterface.appendChild(upgradeUiResourceBuildingButton);
	/*02*/userInterface.appendChild(upgradeUiHealthBuildingButton);
	/*03*/userInterface.appendChild(upgradeUiPredictorBuildingButton);
	/*04*/userInterface.appendChild(upgradeUiAsteroidBuildingButton);
	/*05*/userInterface.appendChild(upgradeUiAlienBuildingButton);
	/*06*/userInterface.appendChild(upgradeUiStormBuildingButton);
	/*07*/userInterface.appendChild(downgradeUiResourceBuildingButton);
	/*08*/userInterface.appendChild(downgradeUiHealthBuildingButton);
	/*09*/userInterface.appendChild(downgradeUiPredictorBuildingButton);
	/*10*/userInterface.appendChild(downgradeUiAsteroidBuildingButton);
	/*11*/userInterface.appendChild(downgradeUiAlienBuildingButton);
	/*12*/userInterface.appendChild(downgradeUiStormBuildingButton);
	/*13*/userInterface.appendChild(uiResourceBuildingLevel);
	/*14*/userInterface.appendChild(uiPredictorBuildingLevel);
	/*15*/userInterface.appendChild(uiHealthBuldingLevel);
	/*16*/userInterface.appendChild(uiAsteroidBuildingLevel);
	/*17*/userInterface.appendChild(uiAlienBuildingLevel);
	/*18*/userInterface.appendChild(uiStormBuildingLevel);


	/*19*/userInterface.appendChild(uiHealthBar);
	/*20*/userInterface.appendChild(uiHealth);
	/*21*/userInterface.appendChild(uiResources);
	/*22*/userInterface.appendChild(uiWarningArea);
		

	return userInterface;
}

function updateWarning(gameObj,uiWarningArea,naturalDisasterQueue,predictorLevel) {
	uiWarningArea.removeAllChildren();

	var warningBackground = new lime.Sprite()
    	.setSize(gameObj.tile_size * 8,
    	gameObj.tile_size * 26)
    	.setAnchorPoint(0, 0)
    	.setPosition(0, 0)
    	.setFill('img/uiDisasterQueue.png');

	uiWarningArea.appendChild(warningBackground);

	for (var i = 0; i < predictorLevel; i++) {
		var warning = new lime.Sprite()
    		.setSize(gameObj.tile_size * 6,
    			gameObj.tile_size * 4)
    		.setAnchorPoint(0, 0)
    		.setPosition(gameObj.tile_size, 
    			gameObj.tile_size*(1+5*i));

    	var disaster = naturalDisasterQueue.peekItemFromQueue(i);
    	if(disaster.disasterType==='Asteroid'){
    		warning.setFill('img/uiDisasterQueueAsteroids.png');
    	}else if(disaster.disasterType==='Aliens'){
    		warning.setFill('img/uiDisasterQueueAliens.png');
    	}else{
    		warning.setFill('img/uiDisasterQueueElectricStorm.png');
    	}

    	uiWarningArea.appendChild(warning);
	};
}