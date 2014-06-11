'use strict';

describe('Service: SkydiverService', function () {

  // load the service's module
  beforeEach(module('arqWebApp'));

  // instantiate service
  var SkydiverService;
  beforeEach(inject(function (_SkydiverService_) {
    SkydiverService = _SkydiverService_;
  }));

  it('should do something', function () {
    expect(!!SkydiverService).toBe(true);
  });

});
