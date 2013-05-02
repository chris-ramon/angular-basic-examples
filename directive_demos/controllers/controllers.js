// Controllers
var controllers = {};

controllers.someController = function ($scope) {
    $scope.name = "Christian";
    $scope.title = 'Click me to expand';
    $scope.text = 'Hi there folks, I am the content ' +
        'that was hidden but is now shown.';
};

appModule.controller(controllers);