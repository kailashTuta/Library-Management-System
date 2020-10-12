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
        .when('/services', {
            templateUrl: '../pages/service.html',
            controller: 'servicesController'
        })
        .when('/library', {
            templateUrl: '../pages/library.html',
            controller: 'libraryController'
        })
        .when('/register', {
            templateUrl: '../pages/register.html',
            controller: 'registerController'
        });
});

// CONTROLLER
myApp.controller('homeController', ['$scope', '$http', function ($scope, $http) {
    $http.get('../json/Home.json').then(function (response) {
        $scope.home = response.data;
    });
}]);
myApp.controller('servicesController', ['$scope', '$http', function ($scope, $http) {
    $http.get('../json/services.json').then(function (response) {
        $scope.services = response.data;
    });
}]);
myApp.controller('libraryController', ['$scope', function ($scope) {
    $scope.password = '';
    console.log($scope.password);
}]);
myApp.controller('registerController', ['$scope', function ($scope) {

}]);

// DIRECTIVES
myApp.directive("libraryFooter", function () {
    return {
        restrict: 'E',
        templateUrl: '../directives/footer.html',
        replace: true,
    };
});
myApp.directive("libraryNavbar", function () {
    return {
        restrict: 'E',
        templateUrl: '../directives/navbar.html',
        replace: true,
    };
});
myApp.directive("libraryLogin", function () {
    return {
        restrict: 'E',
        templateUrl: '../directives/login.html',
        replace: true,
    };
});