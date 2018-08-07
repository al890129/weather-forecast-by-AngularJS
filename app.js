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




myWeatherApp.config(function($sceDelegateProvider) {
$sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain. **.
    'http://api.openweathermap.org/data/2.5/forecast/daily/**'
  ]);
})


myWeatherApp.controller('homeController', ['$scope', 'weatherService',function($scope,weatherService) {
  $scope.cityname = weatherService.cityname
  $scope.$watch('cityname', function() {
    weatherService.cityname = $scope.cityname
  })
}])


myWeatherApp.controller('forecastController', ['$scope', '$resource', 'weatherService', function($scope,$resource,weatherService) {
  $scope.cityname = weatherService.cityname;

  $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=6af3cecef18847c15630ec7ee914d90a',
  {callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}})

  $scope.weatherResult = $scope.weatherAPI.get({q:$scope.cityname, cnt:2});

  console.log($scope.weatherResult)

}])
