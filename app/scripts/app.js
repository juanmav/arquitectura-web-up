'use strict';

var app = angular.module('arqWebApp',
    [ 'ngResource', 'ngSanitize', 'ngRoute', 'mgcrea.ngStrap', 'toaster']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    }).when('/contact', {
        templateUrl: 'views/contact.html',
        controller: ''
    }).otherwise({
        templateUrl: '404.html',
        controller: ''
    });
});

// Configuracion de DropDowns
app.config(function ($dropdownProvider) {
    angular.extend($dropdownProvider.defaults, {
        html: true
    });
})