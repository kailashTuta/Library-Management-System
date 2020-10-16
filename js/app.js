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

//SERVICES
myLibrary.service('userCredentials', function () {
    this.userDetails = [
        {
            "email": "user@usermail.com",
            "Password": "User123"
        }
    ];
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
myLibrary.controller('loginController', ['$scope', 'userCredentials', function ($scope, usercredentials) {
    $scope.password = '';
    // console.log($scope.password);
    $scope.loginDetails = usercredentials.userDetails;
    console.log($scope.loginDetails);
}]);
myLibrary.controller('registerController', ['$scope', 'userCredentials', '$window', function ($scope, userCredentials, $window) {
    // $scope.password = '';
    // console.log($scope.password);
    $scope.registerDetails = userCredentials.userDetails;
    $scope.registerDetails.push({ 'email': "kailashtuta2000@gmail.com", "password": "Hello" });

    $scope.validation = function () {
        var logged = true;
        for (var i = 0; i < $scope.registerDetails.length; i++) {
            if ($scope.email == $scope.registerDetails[i].email) {
                logged = false;
                console.log($scope.registerDetails[i].email);
            }
        }
        if (logged) {
            $window.location.href = '#/login';
        }
        else {
            alert("User already exist");
        }
    };
    $scope.$watch('userDetails', function () {
        userCredentials.userDetails = $scope.registerDetails;
    });
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