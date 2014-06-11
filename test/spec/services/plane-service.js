'use strict';

describe('Service: PlaneService', function () {

  // load the service's module
  beforeEach(module('arqWebApp'));

  // instantiate service
  var PlaneService;
  beforeEach(inject(function (_PlaneService_) {
    PlaneService = _PlaneService_;
  }));

  it('should do something', function () {
    expect(!!PlaneService).toBe(true);
  });

});
