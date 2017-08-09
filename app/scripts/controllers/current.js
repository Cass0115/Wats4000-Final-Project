'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the projectsApp
 */
angular.module('projectsApp')
.controller('CurrentCtrl', function ($scope, $routeParams, current, $localStorage) {
  $scope.cityID = $routeParams.cityID;

console.log('hello');
  $scope.currentWeather = current.query({
      cityID: $routeParams.cityID
  });



// Save City Function
$scope.saveCity = function(city){
    var cityData = {
        'name': city.name,
        'id': city.id
    };
    if (!$localStorage.savedCities){
        $localStorage.savedCities = [cityData];
    } else {
        // Check to make sure we haven't already saved the city.
        var save = true;
        for (var i=0; i < $localStorage.savedCities.length; i++){
            if ($localStorage.savedCities[i].id == cityData.id) {
                // this is a duplicate, so don't save
                save = false;
            }
        }
        if (save==true){
            $localStorage.savedCities.push(cityData);
        } else {
            console.log('city already saved');
        }
    }
};
});
