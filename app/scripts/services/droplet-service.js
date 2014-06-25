'use strict';

var app = angular.module('arqWebApp');

app.service('DropletService', function ($resource) {
    return $resource('http://'+ window.location.hostname +':3000/servers.json', {}, {
        get : {
            method : 'GET',
            isArray : true
        },
        update : {
            method : 'PUT'
        }
    });
});