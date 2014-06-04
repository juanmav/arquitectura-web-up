'use strict';

describe('Controller: FlightsCtrl', function () {

  // load the controller's module
  beforeEach(module('arqWebApp'));

  var FlightsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlightsCtrl = $controller('FlightsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
