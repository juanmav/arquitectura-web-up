'use strict';

var app = angular.module('arqWebApp');
app.controller('FlightsCtrl', function ($scope, SkydiverService, PilotService, PlaneService, toaster) {

    //$scope.skydivers = [];

    SkydiverService.get({}, function (sucess) {
        console.log(sucess);
        $scope.skydivers = sucess;
        markTypeObject($scope.skydivers, 1);
    }, function (error) {
        console.log(error);
        $scope.skydivers = [];
        toaster.pop('error', "Skydivers", "No se pudo conectar al BackEnd");
    });

    PilotService.get({}, function (sucess) {
        console.log(sucess);
        $scope.pilots = sucess;
        markTypeObject($scope.pilots, 2);
    }, function (error) {
        console.log(error);
        $scope.pilots = [];
        toaster.pop('error', "Pilots", "No se pudo conectar al BackEnd");
    });

    PlaneService.get({}, function (sucess) {
        console.log(sucess);
        $scope.planes = sucess;
        markTypeObject($scope.planes, 3);
    }, function (error) {
        console.log(error);
        $scope.planes = [];
        toaster.pop('error', "Planes", "No se pudo conectar al BackEnd");
    });

    // Esto marca el tipo de objeto (Skydiver/Pilot/Plane) para el drag-&-drop
    function markTypeObject(values, mark){
        angular.forEach(values, function(value, key) {
            value.typeObj = mark;
        });
    }

    $scope.flights = [
        {
            id: undefined,
            day_order : 1,
            skydivers: [],
            pilot: {},
            plane: {},
            altitude : 12000,
            status : { id: 1, name : "Preparando..." }
        }

    ];

    $scope.call = function (flight){
        flight.status = { id: 2, name : "5 min...!" }
    };

    $scope.board = function (flight){
        flight.status = { id: 3, name : "Al Avion...!" }
    };

    $scope.flighting = function(flight){
        flight.status = { id: 4, name : "En Vuelo" }
    };

    $scope.done = function(flight){
        flight.status = { id: 5, name : "Realizado" }
    };

    $scope.backward = function(flight){
        var index = $scope.flights.indexOf(flight);
        console.log($scope.flights.length)
        console.log(index);
        if ( (index + 1) < $scope.flights.length){
            console.log('puedo moverme');
            var nextFlight = $scope.flights[index+1];
            flight.day_order++;
            nextFlight.day_order--;
            $scope.flights[index] = nextFlight;
            $scope.flights[index+1] = flight;
        } else {
            toaster.pop('warning', "Flight", "No se puede Retrasar mas es el ultimo.");
        }

    };

    $scope.forward = function(flight){
        var index = $scope.flights.indexOf(flight);
        console.log($scope.flights.length)
        console.log(index);
        if ((index - 1) >= 0){
            console.log('puedo moverme');
            var previousFlight = $scope.flights[index-1];
            previousFlight.day_order++;
            flight.day_order--;
            $scope.flights[index] = previousFlight;
            $scope.flights[index-1] = flight;
        } else {
            toaster.pop('warning', "Flight", "No se puede Adelantar mas es el primero.");

        }

    };



    $scope.delete = function(flight){
        if (flight.status.id != 1){
            toaster.pop('error', "Flight", "No se puede, borra la el vuelo, ya esta en progreso!");
        } else {
            toaster.pop('success', "Flight", "Vuelo Borrado con Exito");
            $scope.flights.removeItem(flight);
        }
    };

    $scope.onDropComplete = function (data, flight) {
        switch (data.typeObj) {
            case 1:
                if (flight.skydivers.indexOf(data) == -1) {
                    flight.skydivers.push(data)
                }
                break;
            case 2:
                flight.pilot = data;
                break;
            case 3:
                flight.plane = data;
                break;
        }
    }

    $scope.newFlight = function () {

        console.log($scope.flights.length);

        var flight = {};
        flight.day_order = $scope.flights.length + 1;
        flight.pilot = {};
        flight.skydivers = [];
        flight.plane = {};
        flight.altitude = 12000;
        flight.status = { id : 1, name : "Preparando..."};
        $scope.flights.push(flight);
    };

    $scope.removeFromFlight = function (skydiver, flight) {
        // Se agrego el comportamiento en el protype de Array.
        // arrayprotoype.js
        flight.skydivers.removeItem(skydiver);
    };

    $scope.removePilotFromFlight = function (flight){
        flight.pilot ={};
    };

    $scope.removePlaneFromFlight = function(flight){
        flight.plane = {};
    };

    $scope.selectAltitude = function (flight){

    }

    $scope.dropdown = [
        {
            "text": "<i class=\"glyphicon glyphicon-bullhorn\"></i>&nbsp;Llamar Skydivers!",
            "click": "call(flight)"
        },
        {
            "text": "<i class=\"glyphicon glyphicon-direction\"></i>&nbsp;Al Avion!",
            "click": "board(flight)"
        },
        {
            "text": "<i class=\"glyphicon glyphicon-cloud\"></i>&nbsp;En vuelo",
            "click": "flighting(flight)"
        },
        {
            "divider": true
        },
        {
            "text": "<i class=\"glyphicon glyphicon-ok\"></i>&nbsp;Realizado",
            "click": "done(flight)"
        },
        {
            "divider": true
        },
        {
            "text": "<i class=\"glyphicon glyphicon-step-forward\"></i>&nbsp;Adelantar",
            "click": "forward(flight)"
        },
        {
            "text": "<i class=\"glyphicon glyphicon-step-backward\"></i>&nbsp;Retrasar",
            "click": "backward(flight)"
        },
        {
            "divider": true
        },
        {
            "text": "<i class=\"glyphicon glyphicon-remove\"></i>&nbsp;Borrar",
            "click": "delete(flight)"
        }

    ];

});
