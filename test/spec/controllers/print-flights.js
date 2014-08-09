'use strict';

describe('Controller: PrintFlightsCtrl', function () {

  // load the controller's module
  beforeEach(module('arqWebApp'));

  var PrintFlightsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrintFlightsCtrl = $controller('PrintFlightsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
