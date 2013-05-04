appModule.directive('other', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div class="row-fluid">' +
            'My Awesome Directive!!! ' +
            '<span ng-transclude></span>' +
            '</div>'
    }
});