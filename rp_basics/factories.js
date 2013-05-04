myModule.factory('categoryFactory', function() {
    var factory = {};

    factory.get_categories = function() {
        var categories = [
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
        return categories;
    }

    return factory;
});