'use strict';

/**
 * @ngdoc function
 * @name arqWebApp.controller:PrintFlightsCtrl
 * @description
 * # PrintFlightsCtrl
 * Controller of the arqWebApp
 */
var app = angular.module('arqWebApp')
app.controller('PrintFlightsCtrl', function ($scope, FlightService) {

    $scope.flights = {};

    $scope.date = new Date().toString("dd/MM/yyyy");

    FlightService.query({}, function (sucess) {
        $scope.flights = sucess;
        var accomplished = [];
        angular.forEach($scope.flights, function(index){
            if (index.status_id == 5)
                accomplished.push(index);

        });
        $scope.flights = accomplished;
    }, function (error) {
        toaster.pop('error', "Vuelos", "No se pudo conectar al BackEnd");
    });

    console.log('esperando impresion');

    setTimeout(function (){
        function printDiv(divName) {
            var printContents = document.getElementById(divName).innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = "<html><head><title></title></head><body>" +
                printContents + "</body>";
            window.print();
            document.body.innerHTML = originalContents;
        };
        printDiv('printable');
    }, 2000);
});
