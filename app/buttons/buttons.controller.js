(function () {

  'use strict';

  angular
    .module('app')
    .controller('ButtonsController', buttonsController);

  buttonsController.$inject = ['$scope', '$rootScope', 'appService'];

  function buttonsController($scope, $rootScope, appService) {
    console.log("BUTTONS CONTROLLER");
  }

})();