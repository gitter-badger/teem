'use strict';

// Declare app level module which depends on views, and components
var pear2pear = angular.module('Pear2Pear', [
  'ngRoute',
  'tasks',
  'pascalprecht.translate',
  'Pear2Pear.version',
  'mobile-angular-ui'
]).
config(['$routeProvider', function($routeProvider) {
 $routeProvider.
      when('/tasks', {
        templateUrl: 'tasks/tasks.html',
        controller: 'TasksCtrl'
      }).otherwise({redirectTo: '/'});
}]);
