var app = angular.module('app', []);
var myApp = angular.module('myApp', []);

var app_controllers = {};

app_controllers.FirstCtrl = function($scope) {

}
app_controllers.SecondCtrl = function($scope) {

}
app.controller(app_controllers);


myApp.factory('Data', function() {
    var factory = {};
    var data = {
        message: 'Cool message from factory'
    }
    factory.get_data = function() {
        return data;
    }
    return factory;
});

myApp.controller('AwesomeCtrl', function($scope, Data) {
    $scope.variable = '234';
    $scope.data = Data.get_data();
});

function OtherCtrl($scope) {

}
