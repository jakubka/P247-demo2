var module = angular.module('demoModule');


module.controller('SettingsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

    $http.get('/api/point/getNumberOfPoints').
      success(function (data, status, header, config) {
          $scope.points = data;
      }).error(function () {
          alert("Stala se chyba.");
      });

    $scope.update = function(points) {
        $http.put('/api/point/setNumberOfPoints', points).
          success(function () {
            alert('Ulozeno');
        }).error(function () {
              alert("Stala se chyba.");
          });

    }

}]);