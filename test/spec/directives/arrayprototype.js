'use strict';

describe('Directive: ArrayPrototype', function () {

  // load the directive's module
  beforeEach(module('arqWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-array-prototype></-array-prototype>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ArrayPrototype directive');
  }));
});
