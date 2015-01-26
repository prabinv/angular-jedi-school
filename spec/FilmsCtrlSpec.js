describe('JediSchool.App: FilmsController', function() {
  beforeEach(module('JediSchool.App'));

  var scope, controllerUnderTest;

  beforeEach(inject(function($rootScope, $controller, DataService) {
    scope = $rootScope.$new();

    spyOn(DataService, 'getFilms').and.returnValue({
      success: function(cb) {
        cb({ results: [1, 2, 3, 4, 5]});
      }
    });

    controllerUnderTest = $controller('FilmsController', { $scope: scope });
  }));

  it('should call DataService to get the list of films', function() {
    expect(scope.films.length).toBe(5);
  })
});
