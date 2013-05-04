var myModule = angular.module('myModule', []);

myModule.controller('AppCtrl', function($scope) {
    $scope.customers = [
        {
            name: 'chris',
            age: 24
        },
        {
            name: 'john',
            age: 19
        }
    ];
});

