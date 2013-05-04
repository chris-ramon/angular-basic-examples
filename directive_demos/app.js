var appModule = angular.module('appModule', []);

appModule.config(function ($routeProvider) {
    $routeProvider
        .when(
        '/',
        {
            controller: 'someController',
            templateUrl: 'main.html'
        })
        .otherwise({redirectTo: '/'});
});
