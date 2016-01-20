'use strict';

angular.module('Solution', [])
	.service('SolutionManager', function() {
				var self = this;
		self.numbersArr = [];
		self.score = 0;
		self.solutions = [];
		self.permutations = [];


		self.addGameElements = function(score, numbersArr) {
			self.score = score;
			self.numbersArr = numbersArr;
		};

		self.findInitialPermutations = function(inputArr) {
	  	var results = [];

	  	function permute(arr, memo) {
		    var cur, memo = memo || [];

		    for (var i = 0; i < arr.length; i++) {
		      cur = arr.splice(i, 1);
		      if (arr.length === 0) {
		        results.push(memo.concat(cur));
		      }
		      permute(arr.slice(), memo.concat(cur));
		      arr.splice(i, 0, cur[0]);
		    }
		    return results;
		  }
		  self.permutations = permute(inputArr);

		};

		self.startSearch = function(numbersArr) {
			self.numbersArr = numbersArr;
				var numbers = $.extend(true,[] , self.numbersArr);
				var sol, array = [];
				sol =  numbers[0] + '';
				array.push(sol);
				numbers.shift();
				self.addElementsLoop(array,numbers);
		};

		self.addElementsLoop = function(array, numbersArr) {
			var one, two;
			for (var i = 0; i < 5; i++) {
				one = self.addOperator(array);
				two = self.addNumber(one,numbersArr);
				numbersArr.shift();
				array = two;
			}
		};

		self.addOperator = function(array) {
			var part_sol = [];
			for (var i = 0; i < array.length; i++) {
				
				for (var j = 0; j < 4; j++) {
					var sol;
					if ( j === 0 ) { sol = array[i] + '+'; }
					if ( j === 1 ) { sol = array[i] + '-'; }
					if ( j === 2 ) { sol = array[i] + '*'; }
					if ( j === 3 ) { sol = array[i] + '/'; }
					part_sol.push(sol);
				}
			}
			return part_sol;
		};

		self.addNumber = function(array, numbers) {
			var part_sol_two = [];
			for (var i = 0; i < array.length; i++) {
				var three = '(' + array[i] + numbers[0] + ')';
				self.anyCorrectSolutions(three);
				part_sol_two.push(three);
			}
			return part_sol_two;
		};

		self.anyCorrectSolutions = function(sum) {
			if ( eval(sum) === self.score ) {
				self.solutions.push(sum);
			}
		};
});

