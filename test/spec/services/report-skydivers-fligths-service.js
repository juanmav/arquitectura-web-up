'use strict';

describe('Service: ReportSkydiversFligthsService', function () {

  // load the service's module
  beforeEach(module('arqWebApp'));

  // instantiate service
  var ReportSkydiversFligthsService;
  beforeEach(inject(function (_ReportSkydiversFligthsService_) {
    ReportSkydiversFligthsService = _ReportSkydiversFligthsService_;
  }));

  it('should do something', function () {
    expect(!!ReportSkydiversFligthsService).toBe(true);
  });

});
