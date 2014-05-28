'use strict';

var app = angular.module('arqWebApp');

app.controller('MainCtrl', function ($scope, DropletService, toaster, $modal) {

    $scope.droplets = {};

    DropletService.get({}, function (sucess) {
        console.log(sucess);
        $scope.droplets = sucess.droplets;
    }, function (error) {
        console.log(error);
    });

    $scope.dropdown = [
        {
            "text": "<i class=\"glyphicon glyphicon-edit\"></i>&nbsp;Another action",
            "click" : "click(drop)"
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



    $scope.click = function (drop){
        console.log('me tocaron');
        console.log(drop);
        toaster.pop('success', "title", "text");
        // TODO ver porque no funciona el toaster!
        console.log(toaster);

    }

    // Pre-fetch an external template populated with a custom scope
    var myOtherModal = $modal({scope: $scope, template: 'views/drop.tpl.modal.html', show: false});
    // Show when some event occurs (use $promise property to ensure the template has been loaded)
    $scope.showModal = function() {
        myOtherModal.$promise.then(myOtherModal.show);
    };
});
