'use strict';

var app = angular.module('arqWebApp');
app.controller('FlightsCtrl', function ($scope, SkydiverService, PilotService, PlaneService, toaster, FlightService, $modal) {

    SkydiverService.query({}, function (sucess) {
        $scope.skydivers = sucess;
        markTypeObject($scope.skydivers, 1);
    }, function (error) {
        $scope.skydivers = [];
        toaster.pop('error', "Skydivers", "No se pudo conectar al BackEnd");
    });

    PilotService.query({}, function (sucess) {
        $scope.pilots = sucess;
        markTypeObject($scope.pilots, 2);
    }, function (error) {
        $scope.pilots = [];
        toaster.pop('error', "Pilots", "No se pudo conectar al BackEnd");
    });

    PlaneService.query({}, function (sucess) {
        $scope.planes = sucess;
        markTypeObject($scope.planes, 3);
    }, function (error) {
        $scope.planes = [];
        toaster.pop('error', "Planes", "No se pudo conectar al BackEnd");
    });

    FlightService.query({}, function (sucess) {
        $scope.flights = sucess;
    }, function (error) {
        toaster.pop('error', "Vuelos", "No se pudo conectar al BackEnd");
    });

    // Esto marca el tipo de objeto (Skydiver/Pilot/Plane) para el drag-&-drop
    function markTypeObject(values, mark) {
        angular.forEach(values, function (value, key) {
            value.typeObj = mark;
        });
    }

    $scope.call = function (flight) {
        flight.status = { id: 2, name: "5 min...!" };
        flight.status_id = 2;
        $scope.updateFlight(flight);

    };

    $scope.board = function (flight) {
        flight.status = { id: 3, name: "Al Avion...!" };
        flight.status_id = 3;
        $scope.updateFlight(flight);
    };

    $scope.flighting = function (flight) {
        flight.status = { id: 4, name: "En Vuelo" };
        flight.status_id = 4;
        $scope.updateFlight(flight);
    };

    $scope.done = function (flight) {
        flight.status = { id: 5, name: "Realizado" }
        flight.status_id = 5;
        ;
        $scope.updateFlight(flight);
    };

    $scope.backward = function (flight) {
        var index = $scope.flights.indexOf(flight);
        console.log($scope.flights.length)
        console.log(index);
        if ((index + 1) < $scope.flights.length) {
            console.log('puedo moverme');
            var nextFlight = $scope.flights[index + 1];
            flight.day_order++;
            nextFlight.day_order--;
            $scope.flights[index] = nextFlight;
            $scope.flights[index + 1] = flight;
            // Actualizo Ambos vuelos
            $scope.updateFlight(flight);
            $scope.updateFlight(nextFlight);
        } else {
            toaster.pop('warning', "Flight", "No se puede Retrasar mas es el ultimo.");
        }

    };

    $scope.forward = function (flight) {
        var index = $scope.flights.indexOf(flight);
        console.log($scope.flights.length)
        console.log(index);
        if ((index - 1) >= 0) {
            console.log('puedo moverme');
            var previousFlight = $scope.flights[index - 1];
            previousFlight.day_order++;
            flight.day_order--;
            $scope.flights[index] = previousFlight;
            $scope.flights[index - 1] = flight;
            // Actualizo ambos vuelos.
            $scope.updateFlight(flight);
            $scope.updateFlight(previousFlight);

        } else {
            toaster.pop('warning', "Flight", "No se puede Adelantar mas es el primero.");
        }

    };

    $scope.delete = function (flight) {
        if (flight.status.id != 1) {
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
                $scope.updateFlight(flight);
                break;
            case 2:
                flight.pilots[0] = data;
                $scope.updateFlight(flight);
                break;
            case 3:
                flight.planes[0] = data;
                $scope.updateFlight(flight);
                break;
        }
    }

    $scope.updateFlight = function (flight) {
        FlightService.update(flight, function (success) {
        }, function (error) {
            toaster.pop('error', "Flight", "No se puede Actualizar el vuelo contacte al Admin.");
        });
    }

    $scope.newFlight = function () {

        console.log($scope.flights.length);
        var flight = {};
        flight.day_order = $scope.flights.length + 1;
        flight.altitude = 12000;
        FlightService.save(flight, function (success) {
            console.log(success);
            $scope.flights.push(success);
        }, function (error) {
            console.log(error);
        });
    };

    $scope.removeFromFlight = function (skydiver, flight) {
        // Se agrego el comportamiento en el protype de Array.
        // arrayprotoype.js
        flight.skydivers.removeItem(skydiver);
        $scope.updateFlight(flight);

    };

    $scope.removePilotFromFlight = function (flight) {
        flight.pilots = [];
        $scope.updateFlight(flight);
    };

    $scope.removePlaneFromFlight = function (flight) {
        flight.planes = [];
        $scope.updateFlight(flight);
    };

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

    $scope.report = function () {
        // Pre-fetch an external template populated with a custom scope
        var myOtherModal = $modal({template: 'views/report-skydiver-flight.tpl.modal.html', show: false});
        // Show when some event occurs (use $promise property to ensure the template has been loaded)
        myOtherModal.$promise.then(myOtherModal.show);
    }

});
