// MODULES
var myApp = angular.module('myApp', ['ngRoute']);

// ROUTES
myApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: '../pages/home.html',
            controller: 'homeController'
        })
        .when('/about', {
            templateUrl: '../pages/about.html',
            controller: 'aboutController'
        })
        .when('/library', {
            templateUrl: '../pages/library.html',
            controller: 'libraryController'
        });
});

// CONTROLLER
myApp.controller('homeController', ['$scope', function ($scope) {

}]);
myApp.controller('aboutController', ['$scope', function ($scope) {

}]);
myApp.controller('libraryController', ['$scope', function ($scope) {

}]);