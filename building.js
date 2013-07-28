function ResourceBuilding() {

	/*************************************
	*								     *
	* Properties common to all buildings *
	*								     *
	*************************************/

	// Use this class as a psuedo-template for rest of building classes. Refer here for documentation

	// currentLevel corresponds to the state of a building:
	// 0: Dead (initial)
	// 1: Level 1
	// 2: Level 2
	// 3: level 3
	// 4: level 4
	var currentLevel = 0;

	// Initial upgradeCost is cost to build building
	// Upgrade cost at level:
	// 0: 15 (initial)
	// 1: 10
	// 2: 13
	// 3: 20
	// 4: -1 indicates no update available
	var upgradeCostIndex = [15, 10, 13, 20, -1];
	var nextUpgradeCost = 15;

	// Will never change
	var downgradePayoutIndex = [-1, 0, 5, 6, 10];

	// private

	var upgradeLevelAndCost = function() {
		currentLevel++;
		nextUpgradeCost = upgradeCostIndex[currentLevel];
	};

	var downgradeLevelAndCost = function() {
		currentLevel--;
		nextUpgradeCost = upgradeCostIndex[currentLevel];
	};

	// public

	this.getCurrentLevel = function() {
		return currentLevel;
	};

	this.getNextUpgradeCost = function() {
		return nextUpgradeCost;
	};

	this.getNextDowngradePayout = function() {
		return downgradePayoutIndex[currentLevel];
	};

	/********************
	*		            *
	* Unique Properties *
	*		            *
	*********************/

	// Payout at level:
	// 0: 0
	// 1: 1
	// 2: 2
	// 3: 3
	// 4: 4
	var staticResourcePayoutPerInterval = 0;

	this.upgrade = function() {
		upgradeLevelAndCost();
		staticResourcePayoutPerInterval++;
	};

	this.downgrade = function() {
		staticResourcePayoutPerInterval--;
		downgradeLevelAndCost();
	};

	this.getResourcePayout = function() {
		return staticResourcePayoutPerInterval;
	};
}

function DisasterPredictionBuilding() {
	var currentLevel = 0;
	var upgradeCostIndex = [15, 10, 13, 20, -1];
	var nextUpgradeCost = 15;
	var downgradePayoutIndex = [-1, 0, 5, 6, 10];

	// private

	var upgradeLevelAndCost = function() {
		currentLevel++;
		nextUpgradeCost = upgradeCostIndex[currentLevel];
	};

	var downgradeLevelAndCost = function() {
		currentLevel--;
		nextUpgradeCost = upgradeCostIndex[currentLevel];
	};

	// public

	this.getCurrentLevel = function() {
		return currentLevel;
	};

	this.getNextUpgradeCost = function() {
		return nextUpgradeCost;
	};

	this.getNextDowngradePayout = function() {
		return downgradePayoutIndex[currentLevel];
	};

	// Unique

	var visibleItemsInDisasterQueue = 0;

	this.upgrade = function() {
		upgradeLevelAndCost();
		visibleItemsInDisasterQueue++;
	};

	this.downgrade = function() {
		downgradeLevelAndCost();
		visibleItemsInDisasterQueue--;
	};

	this.getTotalVisibleItemsInDisasterQueue = function() {
		return visibleItemsInDisasterQueue;
	};
}

function HealthBuffBuilding() {
	var currentLevel = 0;
	var upgradeCostIndex = [15, 10, 13, 20, -1];
	var nextUpgradeCost = 15;
	var downgradePayoutIndex = [-1, 0, 5, 6, 10];

	// private

	var upgradeLevelAndCost = function() {
		currentLevel++;
		nextUpgradeCost = upgradeCostIndex[currentLevel];
	};

	var downgradeLevelAndCost = function() {
		currentLevel--;
		nextUpgradeCost = upgradeCostIndex[currentLevel];
	};

	// public

	var staticHealthPayoutPerInterval = 0;

	this.upgrade = function() {
		upgradeLevelAndCost();
		staticHealthPayoutPerInterval++;
	};

	this.downgrade = function() {
		downgradeLevelAndCost();
		staticHealthPayoutPerInterval--;
	};

	this.getCurrentLevel = function() {
		return currentLevel;
	};

	this.getNextUpgradeCost = function() {
		return nextUpgradeCost;
	};

	this.getNextDowngradePayout = function() {
		return downgradePayoutIndex[currentLevel];
	};

	this.getHealthPayout = function() {
		return staticHealthPayoutPerInterval;
	};
}

function PreventDamageBuilding() {
	var currentLevel = 0;
	var upgradeCostIndex = [15, 10, 13, 20, -1];
	var nextUpgradeCost = 15;
	var downgradePayoutIndex = [-1, 0, 5, 6, 10];

	// private

	var upgradeLevelAndCost = function() {
		currentLevel++;
		nextUpgradeCost = upgradeCostIndex[currentLevel];
	};

	var downgradeLevelAndCost = function() {
		currentLevel--;
		nextUpgradeCost = upgradeCostIndex[currentLevel];
	};

	// public

	var damageReductionFactor = 6;

	this.upgrade = function() {
		upgradeLevelAndCost();
		damageReductionFactor--;
	};

	this.downgrade = function() {
		downgradeLevelAndCost();
		damageReductionFactor++;
	};

	this.getCurrentLevel = function() {
		return currentLevel;
	};

	this.getNextUpgradeCost = function() {
		return nextUpgradeCost;
	};

	this.getNextDowngradePayout = function() {
		return downgradePayoutIndex[currentLevel];
	};

	this.getDamageReductionFactor = function() {
		return (1 / damageReductionFactor);
	};
}
