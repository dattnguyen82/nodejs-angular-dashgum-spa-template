(function () {

  'use strict';

  angular
    .module('app')
    .controller('ProfileController', profileController);

  profileController.$inject = ['appService'];

  function profileController(appService) {
    console.log("PROFILE CONTROLLER");
  }

})();