var app = angular.module('JediSchool.App', []);

app.controller('MainController', function($scope, DataService) {
  $scope.message = 'Hello Padawans!! Welcome to the Angular.js Jedi School';

  DataService.getFilms().success(function(response) {
    $scope.films = response.results;
  });
});

app.service('DataService', function($http) {
  var DataService = function() {
    this.getFilms = function() {
      return $http.get('http://swapi.co/api/films/');
    };
  };

  return new DataService();

});
