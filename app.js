var app = angular.module('ZMain', ['ngRoute','ngCookies', 'jsonforms', 'jsonforms-bootstrap']);
app.constant('apiBase', 'https://zdata.bpcphosting.org');

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "office.htm",
        controller : "office_controller as tc"
    })
    .when("/insp", {
        templateUrl : "insprction.htm",
        controller : "inspection_controller as ic"
    })
    .when("/paris", {
        templateUrl : "paris.htm",
        controller : "parisCtrl"
    });
});
