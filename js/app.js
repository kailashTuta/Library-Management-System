// MODULES
var myLibrary = angular.module('myLibrary', ['ngRoute']);

// ROUTES
myLibrary.config(function ($routeProvider, $locationProvider) {
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
        .when('/login', {
            templateUrl: '../pages/login.html',
            controller: 'loginController'
        })
        .when('/register', {
            templateUrl: '../pages/register.html',
            controller: 'registerController'
        })
        .when('/library', {
            templateUrl: '../pages/library.html',
            controller: 'libraryController'
        });
});

// CONTROLLER
myLibrary.controller('homeController', ['$scope', '$http', function ($scope, $http) {
    $http.get('../json/Home.json').then(function (response) {
        $scope.home = response.data;
    });
}]);
myLibrary.controller('servicesController', ['$scope', '$http', function ($scope, $http) {
    $http.get('../json/services.json').then(function (response) {
        $scope.services = response.data;
    });
}]);
myLibrary.controller('loginController', ['$scope', function ($scope) {
    $scope.password = '';
    console.log($scope.password);
}]);
myLibrary.controller('registerController', ['$scope', function ($scope) {
    $scope.password = '';
    console.log($scope.password);
}]);
myLibrary.controller('libraryController', ['$scope', function ($scope) {

}]);

// DIRECTIVES
myLibrary.directive("libraryFooter", function () {
    return {
        restrict: 'E',
        templateUrl: '../directives/footer.html',
        replace: true,
    };
});
myLibrary.directive("libraryNavbar", function () {
    return {
        restrict: 'E',
        templateUrl: '../directives/navbar.html',
        replace: true,
    };
});
myLibrary.directive("libraryLogin", function () {
    return {
        restrict: 'E',
        templateUrl: '../directives/loginform.html',
        replace: true,
    };
});
myLibrary.directive("libraryRegister", function () {
    return {
        restrict: 'E',
        templateUrl: '../directives/registerform.html',
        replace: true,
    };
});