'use strict';
angular.module('ORAL', []);

//Routers
myApp.config(function ($stateProvider) {

    //Blankpage
    $stateProvider.state('ORAL', {
        url: '/ORAL',
        templateUrl: 'partials/plants/ORAL/ORAL.html',
        controller: 'ORALController'
    });
});

//Factories
myApp.factory('ORALServices', ['$http', '$rootScope', function ($http, $rootScope) {

    var factoryDefinitions = {
        donothing: function (donothingReq) {
            return $http.post('/donothing', donothingReq).success(function (data) { return data; });
        }
    }
    return factoryDefinitions;
}
]);

//Controllers
myApp.controller('ORALController', ['$scope', 'ORALServices', '$location', '$rootScope', function ($scope, userServices, $location, $rootScope) {
    
}]);

