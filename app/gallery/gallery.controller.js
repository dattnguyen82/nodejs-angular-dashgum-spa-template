(function () {

  'use strict';

  angular
    .module('app')
    .controller('GalleryController', galleryController);

  galleryController.$inject = ['$scope', '$rootScope', 'appService'];

  function galleryController($scope, $rootScope, appService) {
    console.log("GALLERY CONTROLLER");
  }

})();