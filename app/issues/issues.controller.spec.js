'use strict';

describe('Controller: IssuesCtrl', function () {

  // load the controller's module
  beforeEach(module('ginApp'));

  var IssuesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IssuesCtrl = $controller('IssuesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
