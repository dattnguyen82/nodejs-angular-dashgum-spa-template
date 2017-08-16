(function () {

  'use strict';

  angular
    .module('app')
    .controller('MorrisController', morrisController);

  morrisController.$inject = ['$scope', '$rootScope', 'appService'];

  function morrisController($scope, $rootScope, appService) {
    console.log("MORRIS CONTROLLER");
  }

})();