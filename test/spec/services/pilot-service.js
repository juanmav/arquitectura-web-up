'use strict';

describe('Service: PilotService', function () {

  // load the service's module
  beforeEach(module('arqWebApp'));

  // instantiate service
  var PilotService;
  beforeEach(inject(function (_PilotService_) {
    PilotService = _PilotService_;
  }));

  it('should do something', function () {
    expect(!!PilotService).toBe(true);
  });

});
