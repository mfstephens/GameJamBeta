goog.require('lime.Layer');
goog.require('lime.Sprite');

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

   	var uiWarningArea = new lime.Layer();
	uiWarningArea.setAnchorPoint(0,0);
	uiWarningArea.setSize(gameObj.tile_size*8,gameObj.tile_size*26);
	uiWarningArea.setPosition(gameObj.tile_size*1,gameObj.tile_size*5);

	/*00*/userInterface.appendChild(uiBackground);
	/*01*/userInterface.appendChild(uiResourceBuildingButton);
	/*02*/userInterface.appendChild(uiPredictorBuildingButton);
	/*03*/userInterface.appendChild(uiHealthBuldingButton);
	/*04*/userInterface.appendChild(uiAsteroidBuildingButton);
	/*05*/userInterface.appendChild(uiAlienBuildingButton);
	/*06*/userInterface.appendChild(uiStormBuildingButton);
	/*07*/userInterface.appendChild(upgradeUiResourceBuildingButton);
	/*08*/userInterface.appendChild(upgradeUiHealthBuildingButton);
	/*09*/userInterface.appendChild(upgradeUiPredictorBuildingButton);
	/*10*/userInterface.appendChild(upgradeUiAsteroidBuildingButton);
	/*11*/userInterface.appendChild(upgradeUiAlienBuildingButton);
	/*12*/userInterface.appendChild(upgradeUiStormBuildingButton);
	/*13*/userInterface.appendChild(downgradeUiResourceBuildingButton);
	/*14*/userInterface.appendChild(downgradeUiHealthBuildingButton);
	/*15*/userInterface.appendChild(downgradeUiPredictorBuildingButton);
	/*16*/userInterface.appendChild(downgradeUiAsteroidBuildingButton);
	/*17*/userInterface.appendChild(downgradeUiAlienBuildingButton);
	/*18*/userInterface.appendChild(downgradeUiStormBuildingButton);
	/*19*/userInterface.appendChild(uiResourceBuildingLevel);
	/*20*/userInterface.appendChild(uiPredictorBuildingLevel);
	/*21*/userInterface.appendChild(uiHealthBuldingLevel);
	/*22*/userInterface.appendChild(uiAsteroidBuildingLevel);
	/*23*/userInterface.appendChild(uiAlienBuildingLevel);
	/*24*/userInterface.appendChild(uiStormBuildingLevel);


	/*25*/userInterface.appendChild(uiHealthBar);
	/*26*/userInterface.appendChild(uiHealth);
	/*27*/userInterface.appendChild(uiResources);
	/*28*/userInterface.appendChild(uiWarningArea);


	//setSize(width,height)
    //setPosition(left, top)
		

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