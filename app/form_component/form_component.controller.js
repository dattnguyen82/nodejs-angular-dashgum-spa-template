(function () {

  'use strict';

  angular
    .module('app')
    .controller('FormComponentController', formComponentController);

  formComponentController.$inject = ['$scope', '$rootScope', 'appService'];

  function formComponentController($scope, $rootScope, appService) {
    console.log("FORM COMPONENT CONTROLLER");
  }

})();