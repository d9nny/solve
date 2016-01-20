'use strict';

describe('Solution module', function() {
  describe('SolutionManager', function() {
    // Inject the Solution module into this test
    beforeEach(module('Solution'));
		var numbers = [100,50,3,4,5,6];
		var target = 150; 
		var solution = '(100+50)';
		var partSol = ['(100+50)'];
		var partSolTwo = ['100+'];

	  var solutionManager; // instance of the SolutionManager
	  beforeEach(inject(function(SolutionManager) {
	    solutionManager = SolutionManager;
	  }));

	  beforeEach(function() {
	    solutionManager.addGameElements(target,numbers);
	  });

	  describe('addGameElements', function() {
	  	it('adds the target score', function() {
	  		expect(solutionManager.score).toEqual(target);
	  	});
	  	it('adds the starting numbers', function() {
	  		expect(solutionManager.numbersArr).toEqual(numbers);
	  	});
	  });

	  describe('findInitialPermutations', function() {
	  	it('creates an array of all the possible permutations', function() {
	  		solutionManager.findInitialPermutations(numbers);
	  		expect(solutionManager.permutations.length).toEqual(720);
	  	});
	  });

	 	describe('startSearch', function() {
	  	it('finds a solution', function() {
	  		solutionManager.startSearch(numbers, numbers);
	  		expect(solutionManager.solutions[0]).toEqual(solution);
	  	});
	  	// it('finds all solutions', function() {
	  	// 	solutionManager.startSearch(numbers, numbers);
	  	// 	expect(solutionManager.solutions.length).toEqual(5);
	  	// });
	  });

	  // describe('addElementsLoop', function() {
	  // 	it('loops through addOperator', function() {
	  // 		solutionManager.addElementsLoop(partSol, numbers);
	  // 		expect(solutionManager.addOperator()).toHaveBeenCalled();
	  // 	});
	  // 	it('loops through addNumber', function() {
	  // 		solutionManager.addElementsLoop(numbers,numbers);
	  // 		expect(solutionManager.addNumber()).toHaveBeenCalled();
	  // 	});
	  // });

	  // describe('addOperator', function() {
	  // 	it('creates four arrays for each input', function() {
	  // 		var result = solutionManager.addOperator([partSol]);
	  // 		expect(result.length).toEqual(4);
	  // 	});
	  // 	it('creates four arrays for each input', function() {
	  // 		expect(solutionManager.addOperator(partSol)[0]).toEqual(solution + '+');
	  // 	});
	  // });

	  // describe('addNumber', function() {
	  // 	it('adds a numbers to input', function() {
	  // 		expect(solutionManager.addNumber(partSolTwo, numbers)).toEqual(partSol);
	  // 	});
	  // });

	  describe('anyCorrectSolutions', function() {
	  	it('adds a solution to array', function() {
	  		solutionManager.anyCorrectSolutions(solution);
	  		expect(solutionManager.solutions).toEqual([solution]);
	  	});
	  });

  });
});
