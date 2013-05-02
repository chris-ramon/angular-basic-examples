var app = angular.module('app', []);

app.directive('enter', function() {
    return function(scope, element, attrs) {
        element.bind('mouseenter', function() {
            element.addClass(attrs.enter);
        });
    }
});

app.directive('leave', function() {
   return function(scope, element, attrs) {
       // element[0] = div
       // console.log(element);
       element.bind('mouseleave', function() {
           element.removeClass(attrs.leave);
       })
   }
});
