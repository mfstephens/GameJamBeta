
function Colony() {
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
        health: 100
    }

    // Mistake in the JavaScript language design requires
    // the that = this workaround
	var that = this;
	var applyBuildingUpdate = function(updateParams, index, spritePath) {
		if(updateParams.updateType === "upgrade") {
			// Set building image
			playerObj.resources -= buildings[index].getNextUpgradeCost();
			updateParams.mapLayerObject.setFill("#666699");


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
			updateParams.mapLayerObject.setFill("#666699");

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
    		case "alien":
    			if((playerObj.resource = buildings[3].getNextUpgradeCost()) >= 0
    				&& buildings[3].getCurrentLevel() < 4) {
    				return true;
    			}
    			break;
    		// case 3
    		// case 4
    		// case 5
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
    		case "alien":
    			if(buildings[3].getCurrentLevel() > 1) {
    				return true;
    			}
    			break;
    		// case 2
    		// case 3
    		// case 4
    		// case 5
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
    		case "alien":
    			applyBuildingUpdate(updateParams, 3, "img/buildingDefense.png");
    			break;
    		// case 2
    		// case 3
    		// case 4
    		// case 5
    		default:
    			break;
    	}
    };
}
