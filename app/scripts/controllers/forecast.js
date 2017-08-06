'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the projectsApp
 */
angular.module('projectsApp')
  .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
    $scope.cityID = $routeParams.cityID;

    $scope.forecastData = forecast.query({
      cityID: $routeParams.cityID
    }); 
  });
