(function () {

  'use strict';

  angular
    .module('app')
    .controller('HomeController', homeController);

  homeController.$inject = ['$scope', '$rootScope', 'appService'];

  function homeController($scope, $rootScope, appService) {
    console.log("HOME CONTROLLER");
  }

})();