'use strict';

describe('Service: IssuesService', function () {

  // load the service's module
  beforeEach(module('ginApp'));

  // instantiate service
  var IssuesService;
  beforeEach(inject(function (_IssuesService_) {
    IssuesService = _IssuesService_;
  }));

  it('should do something', function () {
    expect(!!IssuesService).toBe(true);
  });

});
