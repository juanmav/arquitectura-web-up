'use strict';
var app = angular.module('arqWebApp');
app.service('ReportSkydiversFlightsService', function ($resource) {
    return $resource('http://' + window.location.hostname + ':3000/reports.json', {},{
        get: {
            method: 'GET',
            isArray: true
        }
    });
});