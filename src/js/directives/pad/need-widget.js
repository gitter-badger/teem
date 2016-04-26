
'use strict';

angular.module('Teem')
  .directive('needWidget', function() {
    return {
      scope: {},
      controller: [
      '$scope', 'SessionSvc', 'CommunitiesSvc', 'ProjectsSvc', '$location',
      function($scope, SessionSvc, CommunitiesSvc, ProjectsSvc, $location) {
        $scope.bla = function() {
          console.log('bla');
        }

        this.bla = function() {
          return 'ble';
        }
      }],
      templateUrl: 'pad/need-widget.html'
    };
  });
