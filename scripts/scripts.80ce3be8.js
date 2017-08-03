"use strict";angular.module("projectsApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/current",{templateUrl:"views/current.html",controller:"CurrentCtrl",controllerAs:"current"}).otherwise({redirectTo:"/"})}]),angular.module("yourApp").controller("MainCtrl",["$scope","citysearch",function(a,b){a.citiesFound=b.find(),a.findCities=function(){a.citiesFound=b.find({query:a.location}),a.searchQuery=a.location}}]),angular.module("projectsApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("projectsApp").factory("current",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=7e735b71cd3e8a09c532b5d37f161482",{},{query:{method:"GET",params:{cityID:"4717560"},isArray:!1}})}]),angular.module("projectsApp").factory("citysearch",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/find?q=paris&type=like&mode=json&APPID=7e735b71cd3e8a09c532b5d37f161482",{},{find:{method:"GET",params:{query:"seattle"},isArray:!1}})}]),angular.module("projectsApp").controller("CurrentCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("projectsApp").run(["$templateCache",function(a){a.put("views/about.html",'<p>This is the about view.</p> <div ng-app ng-init="firstnum=1;secondnum=2"> <input type="number" min="0" ng-model="firstnum"> plus <input type="number" min="0" ng-model="secondnum"> equals <b>{{firstnum + secondnum}}</b> </div> <span class="label label-success">{{firstnum + secondnum}}</span>'),a.put("views/current.html","<p>This is the current view.</p>"),a.put("views/main.html",'<div ng-app class="jumbotron" ng-controller="MainCtrl"> <h1>Select Your City</h1> <p class="lead"> <div ng-init="location=\'Seattle\'"> <p> <label for="location">Location: <input type="text" name="location" ng-model="location"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="findCities()">Find City</button> </p> </div> <div ng-if="searchQuery"> <p class="lead">{{citiesFound.count}} cities found matching the query: {{searchQuery}}.</p> <dl ng-repeat="city in citiesFound.list"> <dt>{{city.name}}, {{city.sys.country}}</dt> <dd>{{city.weather[0].main}} - {{city.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{city.main.temp}} &deg;F</dd> <dd><a ng-href="/#/current/{{city.id}}" class="btn btn-lg btn-primary">View Weather</a></dd> </dl> </div> </p> </div>')}]);