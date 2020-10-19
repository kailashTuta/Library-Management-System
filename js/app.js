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
        $scope.java = [];
        $scope.internet = [];
        $scope.business = [];
        $scope.web = [];
        $scope.software = [];
        $scope.microsoft = [];
        $scope.others = [];
        for (var i = 0; i <= $scope.books.length; i++) {
            console.log($scope.books[i].categories[0]);
            if ($scope.books[i].categories[0] == 'Java' || $scope.books[i].categories[1] == 'Java') {
                $scope.java.push($scope.books[i]);
            }
            else if ($scope.books[i].categories[0] == 'Internet' || $scope.books[i].categories[1] == 'Internet') {
                $scope.internet.push($scope.books[i]);
            }
            else if ($scope.books[i].categories[0] == 'Business' || $scope.books[i].categories[1] == 'Business') {
                $scope.business.push($scope.books[i]);
            }
            else if ($scope.books[i].categories[0] == 'Web Development' || $scope.books[i].categories[1] == 'Web Development') {
                $scope.web.push($scope.books[i]);
            }
            else if ($scope.books[i].categories[0] == 'Software Engineering' || $scope.books[i].categories[1] == 'Software Engineering') {
                $scope.software.push($scope.books[i]);
            }
            else if ($scope.books[i].categories[0] == 'Microsoft' || $scope.books[i].categories[1] == 'Microsoft') {
                $scope.microsoft.push($scope.books[i]);
            }
            else {
                $scope.others.push($scope.books[i]);
            }
        }

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
myLibrary.directive("bookSection", function () {
    return {
        restrict: 'E',
        templateUrl: '../directives/bookssection.html',
        replace: true,
    };
});