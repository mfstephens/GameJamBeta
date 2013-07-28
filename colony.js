
function Colony(gameObj) {
	var buildings = [
		new ResourceBuilding,
		new DisasterPredictionBuilding,
		new HealthBuffBuilding,
		new PreventDamageBuilding,
		new PreventDamageBuilding,
		new PreventDamageBuilding
	];

	var playerObj = {
        resources: 100,
        health: 76
    }

    // Mistake in the JavaScript language design requires
    // the that = this workaround
	var that = this;
	var applyBuildingUpdate = function(updateParams, index, spritePath) {
		if(updateParams.updateType === "upgrade") {
			// Set building image
			playerObj.resources -= buildings[index].getNextUpgradeCost();
			updateParams.mapLayerObject.setFill("img/buildingPreBuilt.png");

			goog.events.removeAll(updateParams.uiLayerObject);
			lime.scheduleManager.callAfter(function(dt) {
				buildings[index].upgrade();
				console.log(buildings[index].getCurrentLevel());
				updateParams.mapLayerObject.setFill(spritePath);
				addUiButtonEventListener(that, updateParams);
			}, this, 5000);
		}
		else if(updateParams.updateType === "downgrade") {
			// Set building image
			playerObj.resources += buildings[index].getNextDowngradePayout();
			updateParams.mapLayerObject.setFill("img/buildingPreBuilt.png");

			goog.events.removeAll(updateParams.uiLayerObject);
			lime.scheduleManager.callAfter(function(dt) {
				buildings[index].downgrade();
				console.log(buildings[index].getCurrentLevel());
				updateParams.mapLayerObject.setFill(spritePath);
			}, this, 5000);
		}
	};

    this.isPossibleUpgrade = function(buildingType) {
    	switch(buildingType) {
    		case "resource":
    			if((playerObj.resources - buildings[0].getNextUpgradeCost()) >= 0
    				&& buildings[0].getCurrentLevel() < 4) {
    				return true;
    			}
    			break;
            case "prediction":
                if((playerObj.resources - buildings[1].getNextUpgradeCost()) >= 0
                    && buildings[1].getCurrentLevel() < 4) {
                    return true;
                }
                break;
            case "health":
                if((playerObj.resources - buildings[2].getNextUpgradeCost()) >= 0
                    && buildings[2].getCurrentLevel() < 4) {
                    return true;
                }
                break;
    		case "alien":
            console.log(playerObj.resources - buildings[3].getNextUpgradeCost());
    			if((playerObj.resources - buildings[3].getNextUpgradeCost()) >= 0
    				&& buildings[3].getCurrentLevel() < 4) {
    				return true;
    			}
    			break;
    		case "asteroid":
                if((playerObj.resources - buildings[4].getNextUpgradeCost()) >= 0
                    && buildings[4].getCurrentLevel() < 4) {
                    return true;
                }
                break;
            case "storm":
                if((playerObj.resources - buildings[5].getNextUpgradeCost()) >= 0
                    && buildings[5].getCurrentLevel() < 4) {
                    return true;
                }
                break;
    		default:
    			return false;
    			break;
    	}
    };

    this.isPossibleDowngrade = function(buildingType) {
    	switch(buildingType) {
            case "resource":
                if(buildings[0].getCurrentLevel() > 1) {
                    return true;
                }
                break;
            case "prediction":
                if(buildings[1].getCurrentLevel() > 1) {
                    return true;
                }
                break;
            case "health":
                if(buildings[2].getCurrentLevel() > 1) {
                    return true;
                }
            case "alien":
                if(buildings[3].getCurrentLevel() > 1) {
                    return true;
                }
                break;
            case "asteroid":
                if(buildings[4].getCurrentLevel() > 1) {
                    return true;
                }
                break;
            case "storm":
                if(buildings[5].getCurrentLevel() > 1) {
                    return true;
                }
                break;
    		default:
    			return false;
    			break;
    	}
    };

    this.updateBuilding = function(updateParams) {
    	switch(updateParams.buildingType) {
    		case "resource":
    			applyBuildingUpdate(updateParams, 0, "img/resourceBuilding.png");
    			break;
            case "prediction":
                applyBuildingUpdate(updateParams, 1, "img/buildingSweeper.png")
                break;
            case "health":
                applyBuildingUpdate(updateParams, 2, "img/buildingHealthBuff.png");
                break;
    		case "alien":
    			applyBuildingUpdate(updateParams, 3, "img/buildingAlienDefense.png");
    			break;
            case "asteroid":
                applyBuildingUpdate(updateParams, 4, "img/buildingAsteroidsDefense.png");
                break;
    		case "storm":
                applyBuildingUpdate(updateParams, 5, "img/buildingElectricStormDefense.png");
                break;
    		default:
    			break;
    	}
    };

    this.updateHealth = function(damage, heal, uiLayerObject) {
        playerObj.health += heal - damage;
        var newWidth = playerObj.health;
        if(newWidth >= 76) {
            uiLayerObject.setSize(gameObj.tile_size * 76, gameObj.tile_size * 2);
        }
        else if(newWidth <= 0) {
            // Lost game
            uiLayerObject.setSize(gameObj.tile_size * 0, gameObj.tile_size * 2);
        }
        else {
            uiLayerObject.setSize(gameObj.tile_size * newWidth, gameObj.tile_size * 2);
        }
    }
}
