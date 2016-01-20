// 'use strict';		

// 		function MathGame() {
// 			// var startingNumbers = [];
// 			this.amBigNum = 0;
// 			this.solution = '""';
// 			this.sum = 0;
// 			this.score = 934;
// 			this.solution = [];
// 		}

// 		MathGame.prototype.startString = function(inputArr,numbersArr) {
// 			var numbers = numbersArr;
// 			var solutions = [];
// 			for (var i = 0; i < inputArr.length; i++) {
// 				var sol, array = [];
// 				sol =  inputArr[0] + '';
// 				array.push(sol);
// 				numbers.shift();

// 				function addElementsLoop (array, numbers) {
// 					var one, two, finishedArray, complete;

// 					for (var i = 0; i < 5; i++) {
						
// 						function addOperator(array) {
// 							var part_sol = [];
// 							for (var i = 0; i < array.length; i++) {
// 								for (var j = 0; j < 4; j++) {
// 									var sol;
// 									if ( j === 0 ) { sol = array[i] + '+'; }
// 									if ( j === 1 ) { sol = array[i] + '-'; }
// 									if ( j === 2 ) { sol = array[i] + '*'; }
// 									if ( j === 3 ) { sol = array[i] + '/'; }
// 									part_sol.push(sol);
// 								}
// 							}
// 							return part_sol;
// 						}

// 						one = addOperator(array);

// 						function addNumber(array) {
// 							var part_sol_two = [];
// 							for (var i = 0; i < array.length; i++) {
// 								var three = '';
// 								three = '(' + array[i] + numbers[0] + ')';
// 								if ( eval(three) === this.score ) {
// 									solutions.push(three);
// 								} else {
// 									part_sol_two.push(three);
// 								}
// 							}
// 							return part_sol_two;
// 						}

// 						two = addNumber(one);
// 						numbers.shift();
// 						array = two;
// 					}

// 					function addCompletePermutations(array) {
// 						var allFinishedPermutations = [];
// 						for (var i = 0; i < array.length; i++) {
// 							allFinishedPermutations.push(array[i]);
// 						}
// 						return allFinishedPermutations;
// 					}
// 					return complete = addCompletePermutations(array);
// 				}
// 				return finishedArray = addElementsLoop(array,numbers);
// 			}
// 		};


// 		MathGame.prototype.anyCorrectSolutions = function(finishedArray) {
// 			var solutions = [];
// 			for (var i = 0; i < finishedArray.length; i++) {
// 				if ( eval(finishedArray[i]) === this.score ) {
// 					solutions.push(finishedArray[i]);
// 				}
// 			}
// 			return solutions;
// 		};




// original



// 	// this.anyCorrectSolutions = function(finishedArray) {
// 		// 	for (var i = 0; i < finishedArray.length; i++) {
// 		// 		if ( eval(finishedArray[i]) === this.score ) {
// 		// 			this.solutions.push(finishedArray[i]);
// 		// 		}
// 		// 	}
// 		// };






// 		// this.startFurtherPermutations = function(permutations) {
// 		// 	for (var i = 0; i < permutations.length; i++) {
// 		// 		this.startString(permutations[i]);
// 		// 	}
// 		// };

// 		// this.startString = function(inputArr) {
// 		// 	for (var i = 0; i < permutations.length; i++) {
// 		// 		var sol, array = [];
// 		// 		sol = '(((((' + inputArr[0] + '';
// 		// 		array.push(sol);
// 		// 		this.deleteNumber();
// 		// 	}
// 		// 	// this.addElementsLoop(array);
// 		// };

// 		// this.deleteNumber = function() {
// 		// 	this.numbersArr.shift();
// 		// };

// 		// this.addElementsLoop = function(array) {
// 		// 	var one, two;
// 		// 	for (var i = 0; i < 5; i++) {
// 		// 		one = this.addOperator(array);
// 		// 		two = this.addNumber(one);
// 		// 		this.deleteNumber();
// 		// 		array = two;
// 		// 	}
// 		// 	this.addCompletePermutations(two);
// 		// };

// 		// this.addOperator = function(array) {
// 		// 	var part_sol = [];
// 		// 	for (var i = 0; i < array.length; i++) {
// 		// 		for (var j = 0; j < 4; j++) {
// 		// 			var sol;
// 		// 			if ( j === 0 ) { sol = array[i] + '+'; }
// 		// 			if ( j === 1 ) { sol = array[i] + '-'; }
// 		// 			if ( j === 2 ) { sol = array[i] + '*'; }
// 		// 			if ( j === 3 ) { sol = array[i] + '/'; }
// 		// 			part_sol.push(sol);
// 		// 		}
// 		// 	}
// 		// 	return part_sol;
// 		// };

// 		// this.addNumber = function(array) {
// 		// 	var part_sol = [];
// 		// 	for (var i = 0; i < array.length; i++) {
// 		// 		array[i] += this.numbersArr[0] + ')';
// 		// 		part_sol.push(array[i]);
// 		// 	}
// 		// 	return part_sol;
// 		// };

// 		// this.addCompletePermutations = function(array) {
// 		// 	for (var i = 0; i < array.length; i++) {
// 		// 		this.allFinishedPermutations.push(array[i]);
// 		// 	}
// 		// 	this.anyCorrectSolutions(this.allFinishedPermutations);
// 		// };

// 		// this.anyCorrectSolutions = function(finishedArray) {
// 		// 	for (var i = 0; i < finishedArray.length; i++) {
// 		// 		if ( eval(finishedArray[i]) === this.score ) {
// 		// 			this.solutions.push(finishedArray[i]);
// 		// 		}
// 		// 	}
// 		// };





