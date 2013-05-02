var app = angular.module('app', []);

app.directive('todo', function() {
    return {
        restrict: 'E',
        // template: '<div>Task: {{task}}</div>',
        template: '<div>' +
            'Task @: {{taskStr}} </br>' +
            // 'Task @: {{taskEqual}} </br>' +
            'Task =: <input type="text" ng-model="taskEqual">  </br>' +
            'Other attrs: {{other}}</div>',
        // this way we pass the task from
        // the task attribute
        scope: {
          // task: '@task'
            taskStr: '@',
            taskEqual: '=',
            other: '@'
        },
        link: function(scope) {
            // passing variables to the template
            // scope.task = 'learn angular';
        }
    }
});

app.controller('AppCtrl', function($scope) {
    $scope.callHome = function(message) {
        alert('calling home, leaving this message: ' + message);
    }
});

app.directive('phone', function() {
   return {
       restrict: 'E',
       scope: {
           dial: '&'
       },
       template: '<input type="text" ng-model="msg">' +
           '<button ng-click="dial({message: msg})">Call</button>'
   }
});