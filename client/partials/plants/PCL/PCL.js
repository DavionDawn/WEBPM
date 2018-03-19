'use strict';
angular.module('PCL', []);

//Routers
myApp.config(function ($stateProvider) {

    //Blankpage
    $stateProvider.state('PCL', {
        url: '/PCL',
        templateUrl: 'partials/plants/PCL/PCL.html',
        controller: 'PCLController'
    });
});

//Factories
myApp.factory('PCLServices', ['$http', '$rootScope', function ($http, $rootScope) {

    var factoryDefinitions = {
        donothing: function (donothingReq) {
            return $http.post('/donothing', donothingReq).success(function (data) { return data; });
        }
    }
    return factoryDefinitions;
}
]);

//Controllers
myApp.controller('PCLController', ['$scope', 'PCLServices', '$location', '$rootScope', function ($scope, userServices, $location, $rootScope) {
    
}]);

