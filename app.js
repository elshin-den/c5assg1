(function () {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope) {
        $scope.lunch_items = "";
        
        $scope.validateItemsAndOutput = function () {
            var items = $scope.lunch_items.split(',');
            var valid_lunch_item_count = 0;
            for (var i = 0; i < items.length; i++) {
                if (items[i].split(' ').join('').length > 0) {
                    valid_lunch_item_count += 1;
                }
            }
            if (valid_lunch_item_count == 0) {
                $scope.message = 'Please enter data first';
                $scope.style = 'data_not_entered';
            }
            else if (valid_lunch_item_count <= 3) {
                $scope.message = 'Enjoy!';
                $scope.style = 'valid_amount';
            }
            else {
                $scope.message = 'Too much!';
                $scope.style = 'invalid_amount';
            }
        }
    }
})();