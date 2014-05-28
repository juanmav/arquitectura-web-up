'use strict';

var app = angular.module('arqWebApp');

app.controller('MainCtrl', function ($scope, DropletService, toaster, $modal) {

    $scope.droplets = {};

    DropletService.get({}, function (sucess) {
        console.log(sucess);
        $scope.droplets = sucess.droplets;
    }, function (error) {
        console.log(error);

        $scope.droplets = [
            {
                "id": 874401,
                "name": "CS-CloudHost",
                "image_id": 1505447,
                "size_id": 66,
                "region_id": 4,
                "backups_active": false,
                "ip_address": "162.243.255.44",
                "private_ip_address": null,
                "locked": false,
                "status": "active",
                "created_at": "2013-12-17T15:19:37Z"
            },
            {
                "id": 874402,
                "name": "CS-CloudHost-2",
                "image_id": 1505447,
                "size_id": 66,
                "region_id": 4,
                "backups_active": false,
                "ip_address": "162.243.255.45",
                "private_ip_address": null,
                "locked": false,
                "status": "active",
                "created_at": "2013-12-17T15:19:37Z"
            },
            {
                "id": 874403,
                "name": "CS-CloudHost-3",
                "image_id": 1505447,
                "size_id": 66,
                "region_id": 4,
                "backups_active": false,
                "ip_address": "162.243.255.46",
                "private_ip_address": null,
                "locked": false,
                "status": "inactive",
                "created_at": "2013-12-17T15:19:37Z"
            }
        ]
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
});
