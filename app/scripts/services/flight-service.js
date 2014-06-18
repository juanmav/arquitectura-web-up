'use strict';

var app = angular.module('arqWebApp');
app.service('FlightService', function ($resource) {
    return $resource('http://' + window.location.hostname + ':3000/flights.json', {}, {
        update : {
            method: 'PUT',
            params: {id: '@id'},
            url : 'http://' + window.location.hostname + ':3000/flights/:id.json'
        }
        /*get: {
         method: 'GET',
         params: {
         client_id: 'e55eeea2fbd5a5b518ce8408d4d195f8',
         api_key: '017dee0a9e3b34342d784dac0199d387'
         }
         }*/
    });
});