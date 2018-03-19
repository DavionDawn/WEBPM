'use strict';
angular.module('HCL', []);

//Routers
myApp.config(function ($stateProvider) {

    //Blankpage
    $stateProvider.state('HCL', {
        url: '/HCL',
        templateUrl: 'partials/plants/HCL/HCL.html',
        controller: 'HCLController'
    });
});

//Factories
myApp.factory('HCLServices', ['$http', '$rootScope', function ($http, $rootScope) {

    var factoryDefinitions = {
        donothing: function (donothingReq) {
            return $http.post('/donothing', donothingReq).success(function (data) { return data; });
        }
    }
    return factoryDefinitions;
}
]);

//Controllers
myApp.controller('HCLController', ['$scope', 'HCLServices', '$location', '$rootScope', function ($scope, userServices, $location, $rootScope) {
    
}]);

