'use strict';

var app = angular.module('arqWebApp',
    [ 'ngResource', 'ngSanitize', 'ngRoute', 'mgcrea.ngStrap', 'toaster']);
app.config(function ($routeProvider) {
    $routeProvider.when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    }).when('/contact', {
        templateUrl: 'views/contact.html',
        controller: ''
    }).when('/', {
        templateUrl: 'views/flights.html',
        controller: 'FlightsCtrl'
    }).otherwise({
        templateUrl: '404.html',
        controller: ''
    });
})
;

app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
});

// Configuracion de DropDowns
app.config(function ($dropdownProvider) {
    angular.extend($dropdownProvider.defaults, {
        html: true
    });
});

// Configuro DatePicker
app.config(function ($datepickerProvider) {
    angular.extend($datepickerProvider.defaults, {
        dateFormat: 'dd/MM/yyyy',
        startWeek: 1
    });
})