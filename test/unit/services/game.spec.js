'use strict';

describe('Game module', function() {
  describe('GameManager', function() {
    // Inject the Game module into this test
    beforeEach(module('Game'));
 
	  var gameManager; // instance of the GameManager
	  beforeEach(inject(function(GameManager) {
	    gameManager = GameManager;
	  }));

	  describe('.bigNumberQuantity', function() {
	  	it('sets the users chosen number of big numbers', function() {
	  		gameManager.bigNumberQuantity(2);
	  		expect(gameManager.numBigNums).toEqual(2);
	  	});
	  	it('sets the number of small numbers', function() {
	  		gameManager.bigNumberQuantity(2);
	  		expect(gameManager.numSmallNums).toEqual(4);
	  	});
	  });

	 	// describe('.addNumberCards', function() {
	  // 	it('sets the users chosen number of big numbers', function() {
	  // 		gameManager.bigNumberQuantity(2);
	  // 		gameManager.addNumberCards();
	  // 		expect(gameManager.numberCards.length).toEqual(6);
	  // 	});
	  // });

	  describe('selectBigNumber', function() {
			it('if random number is smaller than 0.25 it adds 25', function() {
	  		spyOn(Math, 'random').and.returnValue(0.1);
	  		gameManager.selectBigNumber();
	  		expect(gameManager.bigNums.length).toEqual(3);
	  	});
	  	it('if random number is smaller than 0.25 it adds 25', function() {
	  		spyOn(Math, 'random').and.returnValue(0.1);
	  		expect(gameManager.selectBigNumber()).toBeGreaterThan(20);
	  	});
	  });

	  describe('selectSmallNumber', function() {
	  	it('returns a whole integer', function() {
	  		spyOn(Math, 'random').and.returnValue(0.3);
	  		expect(gameManager.selectSmallNumber()).toEqual(3);
	  	});
	  	it('if random number is 0 it adds 1', function() {
	  		spyOn(Math, 'random').and.returnValue(0);
	  		expect(gameManager.selectSmallNumber()).toEqual(1);
	  	});
	  });

	  describe('setTargetNumber', function() {
	  	it('sets the target score if random number is bigger than 100', function() {
	  		spyOn(Math, 'round').and.returnValue(500);
	  		gameManager.setTargetNumber();
	  		expect(gameManager.targetNumber).toEqual(500);
	  	});
	  	it('if random number is smaller than 100 it adds 200', function() {
	  		spyOn(Math, 'random').and.returnValue(0.05);
	  		gameManager.setTargetNumber();
	  		expect(gameManager.targetNumber).toEqual(250);
	  	});
	  });

	  describe('checkUserGo', function() {
	  	it('when users number matches the target number', function() {
	  		spyOn(Math, 'round').and.returnValue(300);
	  		gameManager.numberCards = [300];
	  		gameManager.setTargetNumber();
	  		expect(gameManager.checkUserGo()).toEqual(true);
	  	});
	  	it('when users number matches the target number with numbers left', function() {
	  		spyOn(Math, 'round').and.returnValue(300);
	  		gameManager.numberCards = [2,300];
	  		gameManager.setTargetNumber();
	  		expect(gameManager.checkUserGo()).toEqual(true);
	  	});
	  	it('when users number does not match the target number', function() {
	  		spyOn(Math, 'round').and.returnValue(300);
	  		gameManager.setTargetNumber();
	  		expect(gameManager.checkUserGo([250])).toBeFalsy();
	  	});
	  });

	  describe('difference', function() {

	  	beforeEach(function() {
	  		spyOn(Math, 'round').and.returnValue(300);
	  		gameManager.setTargetNumber();
		  });

	  	it('when a users number is smaller than target number', function() {
	  		gameManager.userCards = [2,295];
	  		gameManager.difference();
	  		expect(gameManager.diff).toEqual(5);
	  	});
	  	it('when a users number matches the target number', function() {
	  		gameManager.userCards = [2,300];
	  		gameManager.difference();
	  		expect(gameManager.diff).toEqual(0);
	  	});
	  	it('when a users number is bigger than the target number', function() {
	  		gameManager.userCards = [2,305];
	  		gameManager.difference();
	  		expect(gameManager.diff).toEqual(5);
	  	});
	  });

	  describe('calculateRoundScore', function() {
	  	it('10 points for matching the target number', function() {
	  		gameManager.diff = 0
	  		gameManager.calculateRoundScore();
	  		expect(gameManager.roundScore).toEqual(10);
	  	});
	  	it('7 points for within 5 of the target number', function() {
	  		gameManager.diff = 3;
	  		gameManager.calculateRoundScore();
	  		expect(gameManager.roundScore).toEqual(7);
	  	});
	  	it('5 points for within 10 of the target number', function() {
	  		gameManager.diff = 9;
	  		gameManager.calculateRoundScore();
	  		expect(gameManager.roundScore).toEqual(5);
	  	});
	  });

	  describe('updateTotalScore', function() {
	  	it('updates the total score with the round score', function() {
	  		gameManager.roundScore = 10;
	  		gameManager.updateTotalScore();
	  		expect(gameManager.totalScore).toEqual(10);
	  	});
	  });

	  describe('numGenerator', function() {
	  	it('returns a value zero or bigger', function() {
	  		expect(gameManager.numGenerator()).toBeGreaterThan(0);
	  	});
	  	it('returns a value one or smaller', function() {
	  		expect(gameManager.numGenerator()).toBeLessThan(1);
	  	});
	  });

	  describe('addUserNumber', function() {

	  	beforeEach(function() {
	  		gameManager.userCards = [2,5,7];
	  		gameManager.addUserNumber(2);
		  });

	  	it('adding a number removes it from userCards', function() {
	  		expect(gameManager.userCards.length).toEqual(2);
	  	});
	  	it('adding first number', function() {
	  		expect(gameManager.firstPick).toEqual(7);
	  	});
	  	it('adding second number', function() {
	  		gameManager.userCards = [2,5,7];
	  		gameManager.addUserNumber(2);
	  		expect(gameManager.secondPick).toEqual(7);
	  	});
	  });

	 	describe('userCalculate', function() {

		 	beforeEach(function() {
		    gameManager.firstPick = 25;
	  		gameManager.secondPick = 5;
		  });

	  	it('adding', function() {
	  		gameManager.userCalculate(0);
	  		expect(gameManager.userCards[0]).toEqual(30);
	  	});
	  	it('subtracting', function() {
	  		gameManager.userCalculate(1);
	  		expect(gameManager.userCards[0]).toEqual(20);
	  	});
	  	it('multiplying', function() {
	  		gameManager.userCalculate(2);
	  		expect(gameManager.userCards[0]).toEqual(125);
	  	});
	  	it('division', function() {
	  		gameManager.userCalculate(3);
	  		expect(gameManager.userCards[0]).toEqual(5);
	  	});
	  });
  });
});
