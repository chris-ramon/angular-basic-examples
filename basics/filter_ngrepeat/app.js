var myApp = angular.module('myApp', []);

myApp.factory('Products', function() {
    var Products = {};
    Products.get_products = function() {
        return [
            {
                name: 'MacBook Air',
                price: 456
            },
            {
                name: 'MacBook Pro',
                price: 765
            },
            {
                name: 'IPhone',
                price: 555
            },
            {
                name: 'Apple TV',
                price: 444
            }
        ];
    }
    return Products;
});

function FirstCtrl($scope, Products){
    $scope.products = Products.get_products();
}