var app = angular.module('app', []);

app.directive('superhero', function() {
   return {
       restrict: 'E',
       // each directive is going to have
       // its own scope, that said, having
       // multiple directives will
       // have isolated scope.
       scope: {},
       controller: function($scope) {
           $scope.abilities = [];

           this.addStrength = function() {
               $scope.abilities.push('strength');
           }

           this.addSpeed = function() {
               $scope.abilities.push('speed');
           }

           this.addFlight = function() {
               $scope.abilities.push('flight');
           }
       },
       link: function(scope, element, attrs) {
           element.bind('mouseenter', function() {
             console.log(scope.abilities);
           });
       }
   }
});

app.directive('strength', function() {
   return {
       restrict: 'A',
       require: 'superhero',
       link: function(scope, element, attrs, superheroCtrl) {
           superheroCtrl.addStrength();
       }
   }
});

app.directive('speed', function() {
    return {
        restrict: 'A',
        require: 'superhero',
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addSpeed();
        }
    }
});

app.directive('flight', function() {
    return {
        restrict: 'A',
        require: 'superhero',
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addFlight();
        }
    }
})