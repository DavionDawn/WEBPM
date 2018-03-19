'use strict';
angular.module('FOOD', []);

//Routers
myApp.config(function ($stateProvider) {

    //Blankpage
    $stateProvider.state('FOOD', {
        url: '/FOOD',
        templateUrl: 'partials/plants/FOOD/FOOD.html',
        controller: 'FOODController'
    });
});

//Factories
myApp.factory('FOODServices', ['$http', '$rootScope', function ($http, $rootScope) {

    var factoryDefinitions = {
        donothing: function (donothingReq) {
            return $http.post('/donothing', donothingReq).success(function (data) { return data; });
        }
    }
    return factoryDefinitions;
}
]);

//Controllers
myApp.controller('FOODController', ['$scope', 'FOODServices', '$location', '$rootScope', function ($scope, userServices, $location, $rootScope) {
    
}]);

