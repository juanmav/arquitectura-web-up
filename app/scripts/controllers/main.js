'use strict';

var app = angular.module('arqWebApp');

app.controller('MainCtrl', function ($scope, DropletService, toaster, $modal) {

    $scope.droplets = {};

    DropletService.get({}, function (sucess) {
        console.log(sucess);
        $scope.droplets = sucess;
    }, function (error) {
        console.log(error);
        $scope.droplets = [];
        toaster.pop('error', "BackEnd", "No se pudo conectar al BackEnd");
    });

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

    $scope.click = function (drop) {
        console.log('me tocaron');
        console.log(drop.name);

        //toaster.pop('success', "title", "text");
        //toaster.pop('error', "title", "text");
        toaster.pop('warning', "Implementame", "Para que esta funcionalidad haga algo!");
        //toaster.pop('note', "title", "text");

    }

    // Pre-fetch an external template populated with a custom scope
    var myOtherModal = $modal({scope: $scope, template: 'views/drop.tpl.modal.html', show: false});
    // Show when some event occurs (use $promise property to ensure the template has been loaded)
    $scope.showModal = function () {
        myOtherModal.$promise.then(myOtherModal.show);
    };

    $scope.newServer = function () {
        myOtherModal.$promise.then(myOtherModal.show);
    };
});
