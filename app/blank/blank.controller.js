(function () {

  'use strict';

  angular
    .module('app')
    .controller('BlankController', blankController);

  blankController.$inject = ['$scope', '$rootScope', 'appService'];

  function blankController($scope, $rootScope, appService) {
    console.log("BLANK CONTROLLER");
  }

})();