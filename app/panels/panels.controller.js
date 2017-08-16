(function () {

  'use strict';

  angular
    .module('app')
    .controller('PanelsController', panelsController);

  panelsController.$inject = ['$scope', '$rootScope', 'appService'];

  function panelsController($scope, $rootScope, appService) {
    console.log("PANELS CONTROLLER");
  }

})();