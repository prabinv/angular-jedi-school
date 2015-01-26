describe('JediSchool.App: MainController', function() {
  beforeEach(module('JediSchool.App'));

  var scope, controllerUnderTest;

  beforeEach(inject(function($rootScope, $controller, DataService) {
    scope = $rootScope.$new();
    controllerUnderTest = $controller('MainController', { $scope: scope });
  }));

  it('should set the message on scope', function() {
    expect(scope.message).toBe('Hello Padawans!! Welcome to the Angular.js Jedi School');
  });
});
