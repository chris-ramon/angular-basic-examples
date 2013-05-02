var app = angular.module('app', []);

app.controller('AppController', function($scope) {
    $scope.loadMoreTweets = function() {
        console.log('loading more tweets ...');
    };
    $scope.deleteTweets = function() {
        console.log('deleting tweets ...');
    }
});

app.directive('enter', function() {
   return function(scope, element, attrs) {
       element.bind('mouseenter', function() {
        // loadMoreTweets is available in the scope
        // only if the directive is within the
        // ng-controller='AppController'
        // scope.loadMoreTweets();
        // scope.$apply('loadMoreTweets()');

       // reuse this directive and do not worry
       // about what controller is doing
       scope.$apply(attrs.enter);
       });
   }
});