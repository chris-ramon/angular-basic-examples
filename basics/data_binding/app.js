var app = angular.module('app', []);
var myApp = angular.module('myApp', []);

angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById("app"), ["app"]);
    angular.bootstrap(document.getElementById("myApp"), ["myApp"]);
});

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
    $scope.data = Data.get_data();
});

myApp.filter('reverse', function(Data) {
    return function(text) {
        return text.split("").reverse().join("") + Data.get_data().message;
    }
})

myApp.controller('CoolCtrl', function($scope) {
    $scope.data = {message: 'reversed message'};
//    $scope.reverse = function() {
//        return $scope.data.message.split("").reverse().join("");
//    }
    $scope.reverse = function(message) {
        return message.split("").reverse().join("");
    }
});

function OtherCtrl($scope, Data) {
    $scope.data = Data.get_data();
}
