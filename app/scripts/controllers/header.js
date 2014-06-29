'use strict';

var app = angular.module('arqWebApp')

app.controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});
