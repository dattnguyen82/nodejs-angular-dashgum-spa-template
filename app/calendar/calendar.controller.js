(function () {

  'use strict';

  angular
    .module('app')
    .controller('CalendarController', calendarController);

  calendarController.$inject = ['$scope', '$rootScope', 'appService'];

  function calendarController($scope, $rootScope, appService) {
    console.log("CALENDAR CONTROLLER");
  }

})();