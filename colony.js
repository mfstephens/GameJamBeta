
function Colony() {
	var resourceBuilding = new ResourceBuilding;
	var disasterPredictionBuilding = new DisasterPredictionBuilding;
	var healthBuffBuilding = new HealthBuffBuilding;
	var preventAsteroidBuilding = new PreventDamageBuilding;
	var preventAlienBuilding = new PreventDamageBuilding;
	var preventStormBuilding = new PreventDamageBuilding;

	var playerObj = {
        resources: 100,
        health: 100
    }

    // Will return true if update is possible
	// False otherwise
	var updateResourceBuilding = function(updateParams) {
		if(updateParams.updateType === "upgrade") {
			// Set building image
			playerObj.resources -= resourceBuilding.getNextUpgradeCost();
			updateParams.mapLayerObject.setFill("#666699");
			lime.scheduleManager.callAfter(function(dt) {
				resourceBuilding.upgrade();
				console.log(resourceBuilding.getCurrentLevel());
				updateParams.mapLayerObject.setFill('img/resourceBuilding.png');
			}, this, 5000);
		}
		else if(updateParams.updateType === "downgrade") {
			// Set building image
			playerObj.resources += resourceBuilding.getNextDowngradePayout();
			updateParams.mapLayerObject.setFill("#666699");
			lime.scheduleManager.callAfter(function(dt) {
				resourceBuilding.downgrade();
				console.log(resourceBuilding.getCurrentLevel());
				updateParams.mapLayerObject.setFill('img/resourceBuilding.png');
			}, this, 5000);
		}
		console.log("resources: " + playerObj.resources)
	};

    this.isPossibleUpgrade = function(buildingType) {
    	switch(buildingType) {
    		case "resource":
    			if((playerObj.resources - resourceBuilding.getNextUpgradeCost()) >= 0
    				&& resourceBuilding.getCurrentLevel() < 4) {
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

    this.isPossibleDowngrade = function(buildingType) {
    	switch(buildingType) {
    		case "resource":
    			if(resourceBuilding.getCurrentLevel() > 1) {
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
    			updateResourceBuilding(updateParams);
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
