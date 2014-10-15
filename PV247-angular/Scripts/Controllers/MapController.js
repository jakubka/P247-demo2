var module = angular.module('demoModule');


module.controller('MapController', ['$scope', 'pointsLoader', function ($scope, pointsLoader) {
    $scope.points = [];
    $scope.load = function () {
        loadNewPoints();
    }

    $scope.filter = function() {
        $scope.points = $scope.points.filter(function(item, i) {
            return i % 2 == 0;
        });
    }

    function loadNewPoints() {
        pointsLoader.getPoints($scope);
    }

}]);