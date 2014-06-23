'use strict';

var app = angular.module('arqWebApp');
app.controller('ReportSkydiversFligthsCtrl', function ($scope, $filter, ReportSkydiversFlightsService, toaster) {

    $scope.filter = {};
    $scope.filter.selectedDate = new Date();


    $scope.$watch('filter.selectedDate', function(newValue, oldValue) {
        console.log($filter('date')($scope.filter.selectedDate, 'yyyy-MM-dd'));

        ReportSkydiversFlightsService.get({date : $filter('date')($scope.filter.selectedDate, 'yyyy-MM-dd')}, function (success){
            $scope.reports = success;
        }, function(error){
            $scope.reports = [];
            toaster.pop('error', "Pilots", "No se pudo conectar al BackEnd");
        });
    });

});
