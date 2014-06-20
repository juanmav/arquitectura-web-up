'use strict';

var app = angular.module('arqWebApp');
app.controller('ReportSkydiversFligthsCtrl', function ($scope, ReportSkydiversFlightsService, toaster) {
    ReportSkydiversFlightsService.get({}, function (success){
        $scope.reports = success;
    }, function(error){
        $scope.reports = [];
        toaster.pop('error', "Pilots", "No se pudo conectar al BackEnd");
    });

});
