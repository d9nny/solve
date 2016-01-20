'use strict';

angular.module('Game', [])
	.service('GameManager', function() {
		this.totalScore = 0;
		this.roundScore = 0;
		this.targetNumber= 0;
		this.diff = 0;
		this.numberCards = [];
		this.userCards = [];
		this.numBigNums = 0;
		this.numSmallNums = 0;
		this.count = 0;
		this.secondPick=0;
		this.firstPick = 0;
		this.bigNums = [100,75,50,25];

	  this.bigNumberQuantity = function(quantity) {
	  	this.numSmallNums = (6 - quantity);
	  	this.numBigNums = quantity;
	  };

	  this.selectBigNumber = function() {
	  	var num = Math.round(this.numGenerator() * this.bigNums.length);
	  	var select = this.bigNums.splice(num-1,1);
	  	return select[0];
	  };

	  this.selectSmallNumber = function() {
	  	var num = this.numGenerator();
			if (num < 0.1) { 
				return 1; 
			} else {
				return Math.round(num * 10);
			}
	  };

	  this.addNumberCards = function() {
	  	for (var i = 0; i < this.numBigNums; i++) {
	  		this.numberCards.push(this.selectBigNumber());
	  	}
	  	for (var j = 0; j < this.numSmallNums; j++) {
	  		this.numberCards.push(this.selectSmallNumber());
	  	}
	  	this.userCards = $.extend(true,[] , this.numberCards);
	  };

	  this.setTargetNumber = function() {
	  	var num = Math.round(this.numGenerator()*999);
	  	if (num < 101 ) {
	  		return this.targetNumber = (num + 200);
	  	}
	  	this.targetNumber = num;
	  };

	  this.checkUserGo = function() {
	  	for (var i = 0; i < this.numberCards.length; i++) {
		  	if (this.numberCards[i] === this.targetNumber) {
		  	 	return true;
		  	}
	  	}
	  };

	  this.difference = function() {
	  	for (var i = 0; i < this.userCards.length; i++) {
	  		var amount = this.targetNumber - this.userCards[i];
		  	if (amount < 0) {
		  		return this.diff = amount * -1 ;
		  	}
		  	this.diff = amount;
	  	}
	  };

	  this.calculateRoundScore = function() {
	  	if (this.diff === 0) { this.roundScore = 10;	}
	  	if (this.diff > 0 && this.diff < 5 ) { this.roundScore = 7;	}
	  	if (this.diff >= 5 && this.diff < 10) { this.roundScore = 5;	}
	  };
	 
	  this.updateTotalScore = function() {
	  	this.totalScore += this.roundScore;
	  };

	  this.numGenerator = function() {
			return Math.random();
		};

		this.addUserNumber = function(num) {
			this.count += 1;
			if (this.count === 1) {
				this.firstPick = this.userCards[num];
				this.userCards.splice(num,1);
			} 
			if (this.count === 2 ) {
				this.secondPick = this.userCards[num];
				this.userCards.splice(num,1);
			} 
		};

		this.userCalculate = function(op) {
			var newNum;
			if (this.firstPick > 0 && this.secondPick > 0 && op !== 4) {
				if ( op === 0 ) { newNum = this.firstPick + this.secondPick; }
				if ( op === 1 ) { newNum = this.firstPick - this.secondPick; }
				if ( op === 2 ) { newNum = this.firstPick * this.secondPick; }
				if ( op === 3) { 
					if (this.firstPick % this.secondPick === 0) {
						if (this.secondPick < this.firstPick) {
							newNum = this.firstPick / this.secondPick;
						} else {
							this.errorSum();
						} 	
					} else {
						this.errorSum();
					} 
				}	
			}
		this.userCards.push(newNum);
		this.count = 0;
		};

		this.errorSum = function() {
			this.userCards.push(this.firstPick);
			this.userCards.push(this.secondPick);
		};

		this.goReset = function() {
			this.count = 0;
			this.secondPick = 0;
			this.firstPick = 0;
		};

		this.userSumReset = function() {
			this.count = 0;
			console.log(this.numberCards);
			this.userCards = $.extend(true, [], this.numberCards);
			this.secondPick = 0;
			this.firstPick = 0;
		};

		this.reset = function() {
			this.roundScore = 0;
			this.targetNumber= 0;
			this.diff = 0;
			this.numberCards = [];
			this.numBigNums = 0;
			this.numSmallNums = 0;
			this.count = 0;
			this.userCards = [];
			this.bigNums = [100,75,50,25];
			this.secondPick = 0;
			this.firstPick = 0;
		};
	});

