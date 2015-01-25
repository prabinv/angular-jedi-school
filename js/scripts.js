var app = angular.module('JediSchool.App', []);

app.controller('MainController', function($scope, $http) {
  $scope.message = 'Hello Padawans!! Welcome to the Angular.js Jedi School';

  $http.get('http://swapi.co/api/films/1').success(function(response) {
    $scope.film = response;
  });
});
