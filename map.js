goog.require('lime.Layer');

function createMap(gameObj) {
	var map = new lime.Layer();
	map.setAnchorPoint(0,0);
	map.setSize(gameObj.tile_size*gameObj.mapLayer_w,
		gameObj.tile_size*gameObj.mapLayer_h);

    var resourceBuilding = new lime.Sprite()
    	.setSize(gameObj.tile_size * 16, gameObj.tile_size * 16)
    	.setFill("#3366FF")
    	.setAnchorPoint(0, 0)
    	.setPosition(gameObj.tile_size * 5, gameObj.tile_size * 5);

    var defenseBuilding = new lime.Sprite()
    	.setSize(gameObj.tile_size * 16, gameObj.tile_size * 16)
    	.setFill("#0033CC")
    	.setAnchorPoint(0, 0)
    	.setPosition(gameObj.tile_size * 30, gameObj.tile_size * 30);

	map.appendChild(resourceBuilding);
	map.appendChild(defenseBuilding);

	return map;
}