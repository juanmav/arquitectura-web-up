'use strict';

var app = angular.module('arqWebApp');
app.controller('FlightsCtrl', function ($scope) {

    $scope.skydivers = [
        {
            id: 1,
            name: "Jay Cool",
            typeObj: 1
        },
        {
            id: 2,
            name: "Chino",
            typeObj: 1
        },
        {
            id: 3,
            name: "Santi",
            typeObj: 1
        },
        {
            id: 4,
            name: "Lucho",
            typeObj: 1
        },
        {
            id: 5,
            name: "Rubio",
            typeObj: 1
        }

    ];

    $scope.pilots = [
        {
            id: 1,
            name: "Lucas",
            typeObj: 2
        },
        {
            id: 2,
            name: "Andres",
            typeObj: 2

        }
    ];

    $scope.planes = [
        {
            id: 1,
            name: "GRI",
            typeObj: 3
        },
        {
            id: 2,
            name: "GYC",
            typeObj: 3
        },
        {
            id: 3,
            name: "GSD",
            typeObj: 3
        }
    ];

    $scope.fligths = [
        {
            id: 1,
            skydivers: [],
            pilot: {},
            plane: {},
            altitude : 12000,
            status : { id: 1, name : "Preparando..." }
        }

    ];

    $scope.onDropComplete = function (data, fligth) {
        switch (data.typeObj) {
            case 1:
                if (fligth.skydivers.indexOf(data) == -1) {
                    fligth.skydivers.push(data)
                }
                break;
            case 2:
                fligth.pilot = data;
                break;
            case 3:
                fligth.plane = data;
                break;
        }
    }

    $scope.newFligth = function () {
        console.log($scope.fligths.length);

        var fligth = {};
        fligth.id = $scope.fligths.length + 1;
        fligth.pilot = {};
        fligth.skydivers = [];
        fligth.plane = {};
        fligth.altitude = 12000;
        fligth.status = { id : 1, name : "Preparando..."};
        $scope.fligths.push(fligth);
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

    $scope.dropdown = [
        {
            "text": "<i class=\"glyphicon glyphicon-edit\"></i>&nbsp;Another action",
            "click": "click(drop)"
        },
        {
            "text": "Display an Modal",
            "click": "showModal()"
        },
        {
            "divider": true
        },
        {
            "text": "Separated link",
            "click": "click(drop)"
        }
    ];

});
