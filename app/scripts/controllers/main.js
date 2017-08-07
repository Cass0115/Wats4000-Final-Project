'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectsApp
 */
 angular.module('projectsApp')
 .controller('MainCtrl', function ($scope, citysearch) {
   $scope.citiesFound = citysearch.find();

   $scope.findCities = function(){
       $scope.citiesFound = citysearch.find({
           query: $scope.location
       });
       $scope.searchQuery = $scope.location;
   };
 });
