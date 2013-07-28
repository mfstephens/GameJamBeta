goog.require('lime.Layer');

function createMap(gameObj) {
	var map = new lime.Layer();
	map.setAnchorPoint(0,0);
	map.setSize(gameObj.tile_size*gameObj.mapLayer_w,
		gameObj.tile_size*gameObj.mapLayer_h);

    var resourceBuilding = new lime.Sprite()
    	.setSize(gameObj.tile_size * 16, gameObj.tile_size * 16)
    	.setFill("img/buildingPlacement.png")
    	.setAnchorPoint(0, 0)
    	.setPosition(gameObj.tile_size * 6, gameObj.tile_size * 8);

    var buildingAlienDefense = new lime.Sprite()
        .setSize(gameObj.tile_size * 16, gameObj.tile_size * 16)
        .setFill("img/buildingPlacement.png")
        .setAnchorPoint(0, 0)
        .setPosition(gameObj.tile_size * 3, gameObj.tile_size * 26);

    var buildingHealthBuff = new lime.Sprite()
        .setSize(gameObj.tile_size * 16, gameObj.tile_size * 16)
        .setFill("img/buildingPlacement.png")
        .setAnchorPoint(0, 0)
        .setPosition(gameObj.tile_size * 40, gameObj.tile_size * 15);

    var buildingAsteroidDefense = new lime.Sprite()
        .setSize(gameObj.tile_size * 16, gameObj.tile_size * 16)
        .setFill("img/buildingPlacement.png")
        .setAnchorPoint(0, 0)
        .setPosition(gameObj.tile_size * 26, gameObj.tile_size * 20);

    var buildingStormDefense = new lime.Sprite()
        .setSize(gameObj.tile_size * 16, gameObj.tile_size * 16)
        .setFill("img/buildingPlacement.png")
        .setAnchorPoint(0, 0)
        .setPosition(gameObj.tile_size * 40, gameObj.tile_size * 25);


	map.appendChild(resourceBuilding);
	map.appendChild(buildingAlienDefense);
    map.appendChild(buildingHealthBuff);
    map.appendChild(buildingAsteroidDefense);
    map.appendChild(buildingStormDefense);

	return map;
}