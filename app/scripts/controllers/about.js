'use strict';

var app = angular.module('arqWebApp');

app.controller('AboutCtrl', function ($scope, toaster) {

    $scope.pop = function(){
        toaster.pop('success', "title", "text");
    };

});
