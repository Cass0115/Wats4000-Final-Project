'use strict';

/**
 * @ngdoc service
 * @name projectsApp.current
 * @description
 * # current
 * Factory in the projectsApp.
 */
angular.module('projectsApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...


    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=7e735b71cd3e8a09c532b5d37f161482', {}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle,us',
        },
        isArray:false
      }
    });
  });
