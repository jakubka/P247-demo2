var module = angular.module('demoModule');


module.directive("mapDirective", function() {

    return {
        restrict: "A",
        scope: {
          points: '='  
        },
        templateUrl: "./Templates/MapDirectiveTemplate.html",
        controller: ['$scope', '$element', '$http', function ($scope, $element, $http) {

            var center = SMap.Coords.fromWGS84(16.60842, 49.19404);
            var map = new SMap($element[0], center, 10);
            map.addDefaultLayer(SMap.DEF_BASE).enable();
            map.addDefaultControls();

            var layer = new SMap.Layer.Marker();
            map.addLayer(layer);
            layer.enable();

            $scope.$watch('points', function(newValue, oldValue) {
                layer.clear();
                newValue.forEach(function (item, i) {
                    var marker = new SMap.Marker(SMap.Coords.fromWGS84(item.Longitude, item.Latitude), "marker" + 1);
                    layer.addMarker(marker);
                });
            });
        }],
    };
});