'use strict';

describe('Service: ReposService', function () {

  // load the service's module
  beforeEach(module('ginApp'));

  // instantiate service
  var ReposService;
  beforeEach(inject(function (_ReposService_) {
    ReposService = _ReposService_;
  }));

  it('should do something', function () {
    expect(!!ReposService).toBe(true);
  });

});
