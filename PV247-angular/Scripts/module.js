var demoModule = angular.module('demoModule', ['ngRoute']);

demoModule.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
    $routeProvider.
            when('/settings/:id?', {
                templateUrl: './Templates/SettingsTemplate.html',
                controller: 'SettingsController'
            }).when('/map', {
                templateUrl: './Templates/MapTemplate.html',
                controller: 'MapController'
            }).otherwise({
                redirectTo: '/map'
            });
    }]
);

demoModule.controller('HomeController', function ($scope) {
    $scope.test = "asd";

    //$scope.phones = [
    //  {
    //      'name': 'Nexus S',
    //      'snippet': 'Fast just got faster with Nexus S.'
    //  },
    //  {
    //      'name': 'Motorola XOOM™ with Wi-Fi',
    //      'snippet': 'The Next, Next Generation tablet.'
    //  },
    //  {
    //      'name': 'MOTOROLA XOOM™',
    //      'snippet': 'The Next, Next Generation tablet.'
    //  }
    //];
});