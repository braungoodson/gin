'use strict';

describe('Controller: ReposCtrl', function () {

  // load the controller's module
  beforeEach(module('ginApp'));

  var ReposCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReposCtrl = $controller('ReposCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
