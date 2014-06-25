'use strict';

var app = angular.module('arqWebApp');
app.service('ContactService', function ($resource) {
    return $resource('http://'+ window.location.hostname +':3000/contact.json', {}, {

    });
});