'use strict';

var app = angular.module('arqWebApp');

app.controller('MainCtrl', function ($scope, DropletService, toaster, $modal) {

    $scope.droplets = [];

    $scope.refresh = function() {
        DropletService.get({}, function (sucess) {
            console.log(sucess);
            $scope.droplets = sucess;
        }, function (error) {
            console.log(error);
            $scope.droplets = [
                {
                    "id": 1,
                    "name": "Pepe",
                    "ip": "192.168.0.1",
                    "status": true
                },
                {
                    "id": 2,
                    "name": "Pedro",
                    "ip": "192.168.0.10",
                    "status": false
                }

            ];
            toaster.pop('error', "BackEnd", "No se pudo conectar al BackEnd");
        });
    };

    $scope.refresh();

    $scope.dropdown = [
        {
            "text": "<i class=\"glyphicon glyphicon-edit\"></i>&nbsp;Modificar",
            "click": "edit(drop)"
        },
        {
            "text": "<i class=\"glyphicon glyphicon-remove\"></i>&nbsp;Eliminar",
            "click": "remove(drop)"
        },
        {
            "divider": true
        },
        {
            "text": "<i class=\"glyphicon glyphicon-play\"></i>&nbsp;Encender",
            "click": "turnOn(drop)"
        },
        {
            "text": "<i class=\"glyphicon glyphicon-stop\"></i>&nbsp;Apagar",
            "click": "turnOff(drop)"
        }
    ];

    $scope.myOtherModal = {};
    $scope.newServer = function () {
        $scope.drop = {};
        // Pre-fetch an external template populated with a custom scope
        $scope.myOtherModal = $modal({scope: $scope, template: 'views/drop.tpl.modal.html', show: false});
        // Show when some event occurs (use $promise property to ensure the template has been loaded)
        $scope.myOtherModal.$promise.then($scope.myOtherModal.show);
    };

    $scope.edit = function(drop){
        console.log(drop);
        $scope.drop = drop;
        // Pre-fetch an external template populated with a custom scope
        $scope.myOtherModal = $modal({scope: $scope, template: 'views/drop.tpl.modal.html', show: false});
        // Show when some event occurs (use $promise property to ensure the template has been loaded)
        $scope.myOtherModal.$promise.then($scope.myOtherModal.show);
    }

    $scope.remove = function (drop) {
        $scope.drop = drop;
        // confirm dialog
        alertify.confirm("¿Está seguro que desea eliminar el servidor " + drop.id + "?", function (e) {
            if (e) {
                DropletService.delete(drop, function(success){
                    toaster.pop('success', "Remove Server", "Se eliminó el servidor " + drop.id);
                    $scope.refresh();
                }, function(error){
                    toaster.pop('error', "Drop", "No se pudo eliminar el Droplet");
                });
            }
        });

        $scope.refresh();
    }

    $scope.turnOn = function(drop){
        $scope.drop = drop;
        if (drop.status) {
            toaster.pop('error', "Turning on Server", "El servidor " + drop.id + " ya se encuentra encendido");
        } else {
            drop.status = true;
            DropletService.update(drop, function(success){
                toaster.pop('success', "Turning on Server", "Encendiendo servidor: " + drop.id);
                $scope.refresh();
            }, function(error){
                toaster.pop('error', "Drop", "No se pudo encender el Droplet");
                drop.status = false;
            });
        }
    }

    $scope.turnOff = function(drop){
        $scope.drop = drop;
        if (!drop.status) {
            toaster.pop('error', "Turning off Server", "El servidor " + drop.id + " ya se encuentra apagado");
        } else {
            drop.status = false;
            DropletService.update(drop, function (success) {
                toaster.pop('success', "Turning off Server", "Apagando servidor: " + drop.id);
                $scope.refresh();
            }, function (error) {
                toaster.pop('error', "Drop", "No se pudo apagar el Droplet");
                drop.status = true;
            });
        }
    }

    $scope.save = function(drop){
        console.log('aca salvo');
        console.log(drop);
        if (drop.id) {
            console.log('Edicion');
            DropletService.update(drop, function(success){
                toaster.pop('success', "Drop", "Droplet creado con exito!");
                $scope.refresh();
                $scope.myOtherModal.hide();
            }, function(error){
                toaster.pop('error', "Drop", "No se pudo salvar el Droplet");
            });
        } else {
            console.log('Nuevo');
            DropletService.save(drop, function(success){
                toaster.pop('success', "Drop", "Droplet creado con exito!");
                $scope.refresh();
                $scope.myOtherModal.hide();
            }, function(error){
                toaster.pop('error', "BackEnd", "No se pudo crear el Droplet");
            });
        }
    }
});
