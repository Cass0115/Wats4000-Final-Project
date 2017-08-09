'use strict';

/**
 * @ngdoc service
 * @name projectsApp.citysearch
 * @description
 * # citysearch
 * Factory in the projectsApp.
 */
angular.module('projectsApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...


    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&units=imperial&type=like&mode=json&APPID=7e735b71cd3e8a09c532b5d37f161482', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle',
        },
        isArray: false
      }
    });
  });
