(function () {

  'use strict';

  angular
    .module('app')
    .controller('ChartjsController', chartjsController);

  chartjsController.$inject = ['$scope', '$rootScope', 'appService'];

  function chartjsController($scope, $rootScope, appService) {
    console.log("CHARTJS CONTROLLER");
  }

})();