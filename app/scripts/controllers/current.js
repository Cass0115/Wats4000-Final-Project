'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the projectsApp
 */
angular.module('projectsApp')
  .controller('CurrentCtrl', function ($scope, $routeParams, current) {
    $scope.cityID = $routeParams.cityID;

    $scope.currentWeather = current.query({
      cityID: $routeParams.cityID
    });
  });