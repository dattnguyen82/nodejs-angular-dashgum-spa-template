(function () {

  'use strict';

  angular
    .module('app')
    .controller('TodoListController', todoListController);

  todoListController.$inject = ['$scope', '$rootScope', 'appService'];

  function todoListController($scope, $rootScope, appService) {
    console.log("TODO LIST CONTROLLER");
  }

})();