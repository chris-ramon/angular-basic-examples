appModule.directive('hello', function() {
    return {
        restrict: 'E',
        //replace: true,
        templateUrl: 'helloTemplateInline.html'
        //template: 'test'
    }
});