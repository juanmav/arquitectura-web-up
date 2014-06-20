'use strict';

describe('Controller: ReportSkydiversFligthsCtrl', function () {

  // load the controller's module
  beforeEach(module('arqWebApp'));

  var ReportSkydiversFligthsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReportSkydiversFligthsCtrl = $controller('ReportSkydiversFligthsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
