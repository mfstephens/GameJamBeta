
function Colony(gameObj) {
	var buildings = [
		new ResourceBuilding,
		new DisasterPredictionBuilding,
		new HealthBuffBuilding,
		new PreventDamageBuilding,    // alien
		new PreventDamageBuilding,    // asteroid
		new PreventDamageBuilding     // storm
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
				updateParams.mapLayerObject.setFill(spritePath);
				addUiButtonEventListener(that, updateParams);
			}, this, 5000);

            return buildings[index].getCurrentLevel() + 1;
		}
		else if(updateParams.updateType === "downgrade") {
			// Set building image
			playerObj.resources += buildings[index].getNextDowngradePayout();
			updateParams.mapLayerObject.setFill("img/buildingPreBuilt.png");

			goog.events.removeAll(updateParams.uiLayerObject);
			lime.scheduleManager.callAfter(function(dt) {
				buildings[index].downgrade();
				updateParams.mapLayerObject.setFill(spritePath);
			}, this, 5000);

            return buildings[index].getCurrentLevel() - 1;
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
    			return applyBuildingUpdate(updateParams, 0, "img/resourceBuilding.png");
    			break;
            case "prediction":
                return applyBuildingUpdate(updateParams, 1, "img/buildingSweeper.png");
                break;
            case "health":
                return applyBuildingUpdate(updateParams, 2, "img/buildingHealthBuff.png");
                break;
    		case "alien":
    			return applyBuildingUpdate(updateParams, 3, "img/buildingAlienDefense.png");
    			break;
            case "asteroid":
                return applyBuildingUpdate(updateParams, 4, "img/buildingAsteroidsDefense.png");
                break;
    		case "storm":
                return applyBuildingUpdate(updateParams, 5, "img/buildingElectricStormDefense.png");
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
        console.log("health: " + playerObj.health);
        return playerObj.health;
    };

    this.getResources = function() {
        return playerObj.resources;
    };

    this.initColony = function(uiHealth, uiResources) {
        lime.scheduleManager.scheduleWithDelay(function(dt) {
           that.updateHealth(0, buildings[2].getHealthPayout(), uiHealth); 
        }, this, 1500);

        lime.scheduleManager.scheduleWithDelay(function(dt) {
            playerObj.resources += buildings[0].getResourcePayout();
            uiResources.setText("Resources:" + playerObj.resources);
        }, this, 2000);
    };

    this.getDamageReductionFactors = function() {
        var factors = {
            alienReductionFactor: buildings[3].getDamageReductionFactor(),
            asteroidReductionFactor: buildings[4].getDamageReductionFactor(),
            stormReductionFactor: buildings[5].getDamageReductionFactor(),
        };
        return factors;
    };

    this.getTotalVisibleItemsInDisasterQueue = function() {
        return buildings[1].getTotalVisibleItemsInDisasterQueue();
    };
}
