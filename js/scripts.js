var app = angular.module('JediSchool.App', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
     templateUrl: 'home.html',
     controller: 'MainController'
    })
    .when('/films', {
     templateUrl: 'films.html',
     controller: 'FilmsController'
    })
    .when('/films/:id', {
     templateUrl: 'film.html',
     controller: 'FilmController'
    })
    .otherwise('/');
});

app.controller('MainController', function($scope) {
  $scope.message = 'Hello Padawans!! Welcome to the Angular.js Jedi School';
});

app.controller('FilmsController', function($scope, DataService) {

  DataService.getFilms().success(function(response) {
    $scope.films = response.results;
  });
});

app.controller('FilmController', function($scope, DataService, $routeParams) {

  DataService.getFilm($routeParams.id).success(function(response) {
    $scope.film = response;
  });
});

app.service('DataService', function($http) {
  var DataService = function() {
    this.getFilms = function() {
      return $http.get('http://swapi.co/api/films/');
    };

    this.getFilm = function(id) {
      return $http.get('http://swapi.co/api/films/' + id);
    }
  };

  return new DataService();

});
