describe('JediSchool.App: MainController', function() {
  beforeEach(module('JediSchool.App'));

  var scope, controllerUnderTest;

  beforeEach(inject(function($rootScope, $controller, DataService) {
    scope = $rootScope.$new();

    spyOn(DataService, 'getFilms').and.returnValue({
      success: function(cb) {
        cb({ results: [1, 2, 3, 4, 5]});
      }
    });

    controllerUnderTest = $controller('MainController', { $scope: scope });
  }));

  it('should set the message on scope', function() {
    expect(scope.message).toBe('Hello Padawans!! Welcome to the Angular.js Jedi School');
  });

  it('should call DataService to get the list of films', function() {
    expect(scope.films.length).toBe(5);
  })
});
