'use strict';

mathEvalGame.controller('GameController', ['GameManager', 'SolutionManager', function(GameManager, SolutionManager) {
	var math = this;
	math.activeTab = 1;
	math.activeOp = 4;
	math.game = GameManager;
	math.round = 0;
	math.solution = SolutionManager;
	math.roundSolutions=[];

	  math.setTab = function(tab) {
	    math.activeTab = tab;
	  };

	  math.isActiveTab = function(tab) {
	    return (math.activeTab === tab);
	  };

	  math.isActiveCard = function(card) {
	    return (math.game.userCards[card] > 0);
	  };

	  math.setOp = function(op) {
	    math.activeOp = op;
	  };

	 	math.getSolutions = function() {
		 	var arr = math.solution.solutions;
		 	console.log(arr);
		 	var n = {};
			// for(var i = 0; i < arr.length; i++) {
			// 	if (!n[arr[i]]) 
			// 	{
			// 		n[arr[i]] = true; 
			// 		math.roundSolutions.push(arr[i]); 
			// 	}
			// }
		};

// rray.prototype.unique2 = function() {
// 		var n = {},r=[];
// 		for(var i = 0; i < this.length; i++) 
// 		{
// 			if (!n[this[i]]) 
// 			{
// 				n[this[i]] = true; 
// 				r.push(this[i]); 
// 			}
// 		}
// 		return r;
// 	}


		math.startPermutations = function() {
			var score = math.game.targetNumber;
			var inputArray = $.extend(true,[] , math.game.numberCards);
	  	math.solution.addGameElements(score, inputArray);
	  	math.solution.findInitialPermutations(inputArray);
	  	var perm = math.solution.permutations;
      math.startSolutionSearch(perm);
      console.log(perm);
		};


		math.startSolutionSearch = function(perm) {
			// for (var i = 0; i < perm.length; i++) {
				// math.solution.startSearch(perm[i]);
				math.solution.startSearch(perm);
				math.roundSolutions = (math.solution.solutions);
				console.log(math.roundSolutions);
			// }
		};

	  math.isActiveOp = function(op) {
	    return (math.activeOp === op);
	  };

	  math.startGame = function(num) {
	  	math.round += 1;
	  	math.setTab(2);
	  	math.game.bigNumberQuantity(num);
	  	math.game.addNumberCards();
	  	math.game.setTargetNumber();
	  };

	  math.userAddNum = function(num) {
	  	math.game.addUserNumber(num);
	  };

	  math.calculate = function(op) {
	  	math.game.userCalculate(math.activeOp);
	  	math.game.goReset();
	  	math.activeOp = 4;
	  };

	  math.submit = function() {
	  	math.getSolutions();
			math.game.difference();
			math.game.calculateRoundScore();
			math.game.updateTotalScore();
			math.reset();
	  };

	  math.sumReset = function() {
			math.game.userSumReset();
	  };

	  math.reset = function(){
	  	math.game.reset();
	  };

}]);

