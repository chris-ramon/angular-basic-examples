myModule.directive('rpSubcategory', ['categoryFactory', function() {
    return {
        restrict: 'E',
        template: '<select ng-model="category" ng-options="category.name for category in categories">' +
            '</select>',
        replace: true,
        controller: function($scope, $element){
            $scope.categories = categoryFactory.get_categories()
        }
    }
}]);

myModule.directive('rpCategory', ['$compile', function($compile) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            scope.displaySubcategory = function() {
                var el = $compile('<rp-subcategory></rp-subcategory>')(scope);
                element.after(el);
            }
        }
    }
}]);

myModule.controller('AppCtrl', function($scope) {
    $scope.categories = [
        {
            id: 1,
            name: 'Electronics'
        },
        {
            id: 2,
            name: 'Agriculture'
        },
        {
            id: 3,
            name: 'Clothes'
        }


    ]
});