// goog.provide('gamejambeta.Building');

// gamejambeta.BuildingManager = function() {

// }

function ResourceBuilding() {

	/*************************************
	*								     *
	* Properties common to all buildings *
	*								     *
	*************************************/

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
	}

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
		if(currentLevel < 4) {
			upgradeLevelAndCost();
			staticResourcePayoutPerInterval++;
		}
	};

	this.downgrade = function() {
		if(currentLevel > 0) {
			staticResourcePayoutPerInterval--;
			downgradeLevelAndCost();
		}
	};

	this.getResourcePayout = function() {
		return staticResourcePayoutPerInterval;
	};
}