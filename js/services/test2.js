'use strict';

function MathGame() {
		this.numbersArr = [];
		this.score = 0;
		this.solutions = [];
		this.permutations = [];
		// var this = this;
}

		MathGame.prototype.addGameElements = function(score, numbersArr) {
			this.score = score;
			this.numbersArr = numbersArr;
		};

		MathGame.prototype.findInitialPermutations = function(inputArr) {
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
		  this.permutations = permute(inputArr);

		};

		MathGame.prototype.startSearch = function(inputArr, numbersArr) {
			this.numbersArr = numbersArr;
			for (var i = 0; i < inputArr.length; i++) {
				var numbers = $.extend(true,[] , this.numbersArr);
				var sol, array = [];
				sol =  inputArr[0] + '';
				array.push(sol);
				numbers.shift();
				this.addElementsLoop(array,numbers);
			}
		};

		MathGame.prototype.addElementsLoop = function(array, numbersArr) {
			var numbers = $.extend(true,[] , numbersArr);
			var one, two;
			for (var i = 0; i < 5; i++) {
				one = this.addOperator(array);
				two = this.addNumber(one,numbers);
				numbers.shift();
				array = two;
			}
		};

		MathGame.prototype.addOperator = function(array) {
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

		MathGame.prototype.addNumber = function(array, numbers) {
			var part_sol_two = [];
			for (var i = 0; i < array.length; i++) {
				var three = '(' + array[i] + numbers[0] + ')';
				this.anyCorrectSolutions(three);
				console.log(three);
				part_sol_two.push(three);
			}
			return part_sol_two;
		};

		MathGame.prototype.anyCorrectSolutions = function(sum) {
			if ( eval(sum) === this.score ) {
				console.log(sum);
				this.solutions.push(sum);
			}
		};


