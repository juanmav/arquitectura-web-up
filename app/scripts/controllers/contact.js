'use strict';

var app = angular.module('arqWebApp');
app.controller('ContactCtrl', function ($scope, ContactService, toaster) {
	
	console.log('Cargando Controller');


    $scope.enviar = function(){


        ContactService.save($scope.contact, function(success){
            toaster.pop('success', "BackEnd", "Se envio el mensaje con exito");

        }, function(error){
            toaster.pop('error', "BackEnd", "No se pudo conectar al BackEnd");


        });
        console.log('ME');
	}
});
