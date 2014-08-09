'use strict';

var app = angular.module('arqWebApp');
app.service('FlightService', function ($resource) {
    return $resource('http://' + window.location.hostname + ':3000/flights.json', {}, {
        update : {
            method: 'PUT',
            params: {id: '@id'},
            url : 'http://' + window.location.hostname + ':3000/flights/:id.json'
        }
    });
});