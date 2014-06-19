'use strict';

var app = angular.module('arqWebApp');

app.controller('MainCtrl', function ($scope, DropletService, toaster, $modal) {

    $scope.droplets = [];


    DropletService.get({}, function (sucess) {
        console.log(sucess);
        $scope.droplets = sucess;
    }, function (error) {
        console.log(error);
        $scope.droplets = [ 
        {   
            "id" : 1, 
            "name" : "Pepe",  
            "ip" : "192.168.0.1",  
            "status" : "true"
        },
        {   
            "id" : 2, 
            "name" : "Pedro",  
            "ip" : "192.168.0.10",  
            "status" : "false"
        }

        ];
        toaster.pop('error', "BackEnd", "No se pudo conectar al BackEnd");
    });

    $scope.dropdown = [
        {
            "text": "<i class=\"glyphicon glyphicon-edit\"></i>&nbsp;Another action",
            "click": "click(drop)"
        },
        {
            "text": "New Server",
            "click": "newServer()"
        },
        {
            "divider": true
        },
        {
            "text": "Separated link",
            "click": "click(drop)"
        }
    ];

    $scope.click = function (drop) {
        console.log('me tocaron');
        console.log(drop.name);

        //toaster.pop('success', "title", "text");
        //toaster.pop('error', "title", "text");
        toaster.pop('warning', "Implementame", "Para que esta funcionalidad haga algo!");
        //toaster.pop('note', "title", "text");

    }
    
    $scope.$watch('nombre', function() {
       console.log('cambie nombre')
    });

    $scope.showModal = function () {
        // Pre-fetch an external template populated with a custom scope
        var myOtherModal = $modal({scope: $scope, template: 'views/drop.tpl.modal.html', show: false});
        // Show when some event occurs (use $promise property to ensure the template has been loaded)    
        myOtherModal.$promise.then(myOtherModal.show);
    };

    $scope.newServer = function () {
        $scope.theNewServer = { 'name' : 'pepe'};
        // Pre-fetch an external template populated with a custom scope
        var myOtherModal = $modal({scope: $scope, template: 'views/drop.tpl.modal.html', show: false});
        // Show when some event occurs (use $promise property to ensure the template has been loaded)
        myOtherModal.$promise.then(myOtherModal.show);
    };

    $scope.mostrame = function(){
        console.log($scope.persona);
        DropletService.save($scope.person,function(success){
            toaster.pop('success', "Persona Salvada", "Para que esta funcionalidad haga algo!");
        }, function(error){
            toaster.pop('warning', "Falle", "Para que esta funcionalidad haga algo!");
        });
    }

    // Esta funcion se llamma desde el modal de New Server
    $scope.salvame = function(){
        console.log('salvando');
        console.log($scope.theNewServer);
    }

});
