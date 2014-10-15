var module = angular.module("demoModule");

module.factory("pointsLoader", ['$http', function($http) {
    return {
        getPoints: function($scope) {
            $http.get('/api/point/get').
                success(function(data) {
                    $scope.points = data;

                }).error(function() {
                    alert("Stala se chyba.");
                });
        }

    };
}]);