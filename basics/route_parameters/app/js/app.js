var myApp = angular.module('myApp', []);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl: 'partials/home.html'
            // templateUrl: 'partials/home.html',
            // controller: 'HomeController'
        })
        .when('/category/:category_id',
        {
            templateUrl: 'partials/category.html',
            controller: 'CategoryController'
        })
        .otherwise(
        {
            template: 'this does not exist'
        })
});

//myApp.controller('HomeController', function($scope) {
//
//});

myApp.controller('CategoryController', function($scope, $routeParams) {
    console.log($routeParams);
    $scope.category_id = $routeParams.category_id;
});