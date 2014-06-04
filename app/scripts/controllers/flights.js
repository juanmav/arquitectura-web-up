'use strict';

var app = angular.module('arqWebApp');
app.controller('FlightsCtrl', function ($scope) {

    $scope.skydivers = [
        {
            id: 1,
            name: "JM",
            typeObj: 1
        },
        {
            id: 2,
            name: "Jay",
            typeObj: 1
        },
        {
            id: 3,
            name: "Chinahh",
            typeObj: 1
        },
        {
            id: 4,
            name: "Papelucho",
            typeObj: 1
        },
        {
            id: 5,
            name: "Rubilon",
            typeObj: 1
        }

    ];

    $scope.pilots = [
        {
            id: 1,
            name: "Palo",
            typeObj: 2
        },
        {
            id: 2,
            name: "Ese pibe, el nuevo",
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
            plane: {}
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

    $scope.newFligth = function(){
        console.log($scope.fligths.length);

        var fligth = {};

        fligth.id = $scope.fligths.length + 1;

        $scope.fligths.push(fligth);

    }

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
