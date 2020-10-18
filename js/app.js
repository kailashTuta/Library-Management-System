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
        })
        .when('/books', {
            templateUrl: '../pages/books.html',
            controller: 'booksController'
        });
});

//SERVICES
myLibrary.service('userCredentials', function () {
    this.userDetails = [
        {
            "firstname": "User",
            "lastname": "1234",
            "email": "user@usermail.com",
            "password": "User123"
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
myLibrary.controller('loginController', ['$scope', 'userCredentials', '$window', function ($scope, usercredentials, $window) {
    // console.log($scope.password);
    $scope.loginDetails = usercredentials.userDetails;
    console.log($scope.loginDetails);
    $scope.validation = function () {
        var logged = false;
        for (var i = 0; i < $scope.loginDetails.length; i++) {
            if ($scope.email == $scope.loginDetails[i].email && $scope.password == $scope.loginDetails[i].password) {
                logged = true;
            }
        }
        if (logged) {
            $window.location.href = '#/library';
        } else {
            alert('Invalid Details');
        }
    };
}]);
myLibrary.controller('registerController', ['$scope', 'userCredentials', '$window', function ($scope, userCredentials, $window) {
    $scope.registerDetails = userCredentials.userDetails;
    $scope.validation = function () {
        var logged = true;
        for (var i = 0; i < $scope.registerDetails.length; i++) {
            if ($scope.email == $scope.registerDetails[i].email) {
                logged = false;
            }
        }
        if (logged) {
            $scope.registerDetails.push({ "firstname": $scope.firstname, "lastname": $scope.lastname, "email": $scope.email, "password": $scope.password });
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
myLibrary.controller('booksController', ['$scope', '$http', function ($scope, $http) {
    $http.get('../json/books.json').then(function (response) {
        $scope.books = response.data;
    });
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