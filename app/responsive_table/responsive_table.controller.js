(function () {

  'use strict';

  angular
    .module('app')
    .controller('ResponsiveTableController', responsiveTableController);

  responsiveTableController.$inject = ['$scope', '$rootScope', 'appService'];

  function responsiveTableController($scope, $rootScope, appService) {
    console.log("RESPONSIVE TABLE CONTROLLER");
  }

})();