(function () {

  'use strict';

  angular
    .module('app')
    .controller('BasicTableController', basicTableController);

  basicTableController.$inject = ['$scope', '$rootScope', 'appService'];

  function basicTableController($scope, $rootScope, appService) {
    console.log("BASIC TABLE CONTROLLER");
  }

})();