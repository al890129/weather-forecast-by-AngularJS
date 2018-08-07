var myWeatherApp = angular.module('myWeatherApp', ['ngRoute', 'ngResource'])

myWeatherApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

myWeatherApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'./pages/home.html',
      controller: 'homeController'
    })
    .when('/forecast', {
      templateUrl:'./pages/forecast.html',
      controller: 'forecastController'
    })
})


myWeatherApp.controller('homeController', function() {

})


myWeatherApp.controller('forecastController', function() {

})
