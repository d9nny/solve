'use strict';
describe('GameController', function() {
  beforeEach(module('MathEvalGame'));

  var ctrl, game;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GameController');

    game = {
      bigNumberQuantity : function() {},
      addNumberCards : function() {},
      setTargetNumber : function() {},
      addUserNumber : function() {},
      userCalculate : function() {},
      goReset : function() {},
      difference : function() {},
      calculateRoundScore : function() {},
      updateTotalScore : function() {},
      userSumReset : function() {},
      reset : function() {}
    };

    spyOn(game, 'bigNumberQuantity');
    spyOn(game, 'addNumberCards');
    spyOn(game, 'setTargetNumber');
    spyOn(game, 'addUserNumber');
    spyOn(game, 'userCalculate');
    spyOn(game, 'goReset');
    spyOn(game, 'difference');
    spyOn(game, 'calculateRoundScore');
    spyOn(game, 'updateTotalScore');
    spyOn(game, 'userSumReset');
    spyOn(game, 'reset');
  }));

  describe('setTab', function() {
  	it('sets the tab to the input value', function() {
  		ctrl.setTab(3);
  		expect(ctrl.activeTab).toEqual(3);
  	});
  });

  describe('isActivetTab', function() {
    it('when active tab is equal to the input', function() {
      expect(ctrl.isActiveTab(1)).toBeTruthy();
    });
    it('when active tab is not equal to the input', function() {
      expect(ctrl.isActiveTab(2)).toBeFalsy();
    });
  });


// need to mock Game Manager

  // describe('isActiveCard', function() {
  //   it('when a card has content', function() {
  //     expect(ctrl.isActiveCard(1)).toBeTruthy();
  //   });
  //   it('when a card does not have content', function() {
  //     expect(ctrl.isActiveCard(25)).toBeFalsy();
  //   });
  // });

  describe('setOp', function() {
    it('sets the active operator to the input value', function() {
      ctrl.setOp(3);
      expect(ctrl.activeOp).toEqual(3);
    });
  });

  describe('isActiveOp', function() {
    it('when active operator is equal to the input', function() {
      expect(ctrl.isActiveOp(4)).toBeTruthy();
    });
    it('when active operator is not equal to the input', function() {
      expect(ctrl.isActiveOp(1)).toBeFalsy();
    });
  });

  // describe('startGame', function() {
  //   it('sets tab to 2', function() {
  //     ctrl.startGame(3);
  //     expect(ctrl.activeTab).toEqual(2);
  //   });
  //   it('bigNumberQuantity is called', function() {
  //     ctrl.startGame(3);
  //     expect(ctrl.game.bigNumberQuantity()).toHaveBeenCalled();
  //   });
  //   it('addNumberCards is called', function() {
  //     ctrl.startGame(3);
  //     expect(ctrl.game.addNumberCards()).toHaveBeenCalled();
  //   });
  //   it('setTargetNumber is called', function() {
  //     ctrl.startGame(3);
  //     expect(ctrl.game.setTargetNumber()).toHaveBeenCalled();
  //   });
  // });

  // describe('userAddNum', function() {
  //   it('addUserNumber is called', function() {
  //     ctrl.userAddNum(3);
  //     expect(ctrl.game.addUserNumber()).toHaveBeenCalled();
  //   });
  // });

  // describe('calculate', function() {
  //   it('sets activeOp to 4', function() {
  //     expect(ctrl.activeOp).toEqual(2);
  //     ctrl.calculate(3);
  //     expect(ctrl.activeOp).toEqual(2);
  //   });
  //   it('userCalculate is called', function() {
  //     ctrl.calculate(3);
  //     expect(ctrl.game.userCalculate()).toHaveBeenCalled();
  //   });
  //   it('goReset is called', function() {
  //     ctrl.calculate(3);
  //     expect(ctrl.game.goReset()).toHaveBeenCalled();
  //   });
  // });

  // describe('submit', function() {
  //   it('difference is called', function() {
  //     ctrl.submit(3);
  //     expect(ctrl.game.difference()).toHaveBeenCalled();
  //   });
  //   it('calculateRoundScore is called', function() {
  //     ctrl.submit(3);
  //     expect(ctrl.game.calculateRoundScore()).toHaveBeenCalled();
  //   });
  //   it('updateTotalScore is called', function() {
  //     ctrl.submit(3);
  //     expect(ctrl.game.updateTotalScore()).toHaveBeenCalled();
  //   });
  //   it('reset is called', function() {
  //     ctrl.submit(3);
  //     expect(ctrl.reset()).toHaveBeenCalled();
  //   });
  // });

  // describe('sumReset', function() {
  //   it('userSumReset is called', function() {
  //     ctrl.sumReset(3);
  //     expect(ctrl.game.userSumReset()).toHaveBeenCalled();
  //   });
  // });

  // describe('reset', function() {
  //   it('reset is called', function() {
  //     ctrl.reset(3);
  //     expect(ctrl.game.reset()).toHaveBeenCalled();
  //   });
  // });  

});