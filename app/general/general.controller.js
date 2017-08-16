(function () {

  'use strict';

  angular
    .module('app')
    .controller('GeneralController', generalController);

  generalController.$inject = ['$scope', '$rootScope', 'appService'];

  function generalController($scope, $rootScope, appService) {
    console.log("GENERAL CONTROLLER");
  }

})();