goog.require('lime.Layer');

function createMap(gameObj) {
	var map = new lime.Layer();
	map.setAnchorPoint(0,0);
	map.setSize(gameObj.tile_size*gameObj.mapLayer_w,
		gameObj.tile_size*gameObj.mapLayer_h);

    var background = new lime.Sprite()
        .setSize(gameObj.width, gameObj.height)
        .setFill("img/background.png")
        .setAnchorPoint(0, 0)
        .setPosition(0, 0);

    var resourceBuilding = new lime.Sprite()
    	.setSize(gameObj.tile_size * 16, gameObj.tile_size * 16)
    	.setFill("img/buildingPlacement.png")
    	.setAnchorPoint(0, 0)
    	.setPosition(gameObj.tile_size * 18, gameObj.tile_size * 8);

    var buildingAlienDefense = new lime.Sprite()
        .setSize(gameObj.tile_size * 16, gameObj.tile_size * 16)
        .setFill("img/buildingPlacement.png")
        .setAnchorPoint(0, 0)
        .setPosition(gameObj.tile_size * 10, gameObj.tile_size * 26);

    var buildingSweeper = new lime.Sprite()
        .setSize(gameObj.tile_size * 16, gameObj.tile_size * 16)
        .setFill("img/buildingPlacement.png")
        .setAnchorPoint(0, 0)
        .setPosition(gameObj.tile_size * 35, gameObj.tile_size * 38);

    var buildingHealthBuff = new lime.Sprite()
        .setSize(gameObj.tile_size * 16, gameObj.tile_size * 16)
        .setFill("img/buildingPlacement.png")
        .setAnchorPoint(0, 0)
        .setPosition(gameObj.tile_size * 50, gameObj.tile_size * 13);

    var buildingAsteroidDefense = new lime.Sprite()
        .setSize(gameObj.tile_size * 16, gameObj.tile_size * 16)
        .setFill("img/buildingPlacement.png")
        .setAnchorPoint(0, 0)
        .setPosition(gameObj.tile_size * 30, gameObj.tile_size * 20);

    var buildingStormDefense = new lime.Sprite()
        .setSize(gameObj.tile_size * 16, gameObj.tile_size * 16)
        .setFill("img/buildingPlacement.png")
        .setAnchorPoint(0, 0)
        .setPosition(gameObj.tile_size * 55, gameObj.tile_size * 29);

    map.appendChild(background);
	map.appendChild(resourceBuilding);
	map.appendChild(buildingAlienDefense);
    map.appendChild(buildingSweeper);
    map.appendChild(buildingHealthBuff);
    map.appendChild(buildingAsteroidDefense);
    map.appendChild(buildingStormDefense);

	return map;
}