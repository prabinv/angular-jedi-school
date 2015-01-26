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
  $scope.directors = [''];
  $scope.selectedDirector = '';
  DataService.getFilms().success(function(response) {
    $scope.films = response.results;

    angular.forEach($scope.films, function(item) {
      if (jQuery.inArray(item.director, $scope.directors) === -1)
        $scope.directors.push(item.director);
    });

    console.log($scope.directors);
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

app.directive('openingCrawl', function($interval) {
  return {
    restrict: 'EA',
    replace: 'true',
    template: '<textarea readonly class="scroller">',
    link: function(scope, elem, attrs) {
      attrs.$observe('crawltext', function(newValue) {

        var lines = newValue.split('\r\n');
        var index = 0;
        $interval(function () {
          elem.text(elem.text() + '\r\n' + lines[index]);
          index++;
          elem[0].scrollTop = elem[0].scrollHeight;
        }, 1000, lines.length);

      });
    }
  };
});
