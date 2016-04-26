'use strict';

angular.module('Teem')
  .factory('needWidget', [
  '$compile', '$timeout',
  function($compile, $timeout) {
    var editor, scope;

    function init (e, s) {
      editor = e;
      scope = s;

      editor.registerWidget('need', {
        onInit: function(parent, model) {
          var element = angular.element(document.createElement('need-widget')),
              compiled = $compile(element)(scope),
              isolateScope;

          $timeout(function() {
            isolateScope = element.isolateScope();

            isolateScope.need = {
              text: model.get('text').getValue()
            };
          });

          angular.element(parent).append(compiled);
        }
      });
    }

    function add () {
      editor.addModelWidget('need', 'root.needs.0');
    }

    return {
      init,
      add
    };
  }]);
