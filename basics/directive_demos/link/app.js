var app = angular.module('app', []);

app.directive('enter', function() {
    return {
        link: function(scope, element) {
            // console.log(element);
            element.bind('mouseenter', function() {
               console.log('mouse enter within! ' + element.text());
            });
        }
    }
});

app.directive('leave', function() {
    // short
   return function(scope, element) {
       element.bind('mouseleave', function() {
          console.log('mouse leave from! ' + element.text());
       });
   }
});