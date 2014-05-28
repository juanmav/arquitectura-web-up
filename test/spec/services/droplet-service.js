'use strict';

describe('Service: DropletService', function () {

  // load the service's module
  beforeEach(module('arqWebApp'));

  // instantiate service
  var DropletService;
  beforeEach(inject(function (_DropletService_) {
    DropletService = _DropletService_;
  }));

  it('should do something', function () {
    expect(!!DropletService).toBe(true);
  });

});
