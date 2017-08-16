(function () {

  'use strict';

  angular
    .module('app', ['ui.router'])
    .controller('MainController', mainController)
    .config(config);

  mainController.$inject = ['$scope', '$rootScope', '$location', 'appService'];

  function mainController($scope, $rootScope, $location, appService) {
   console.log("MAIN CONTROLLER");
  }

  config.$inject = [
    '$stateProvider',
    '$locationProvider',
    '$urlRouterProvider'
  ];

  function config(
    $stateProvider,
    $locationProvider,
    $urlRouterProvider
  ) {

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeController',
        templateUrl: 'app/home/home.html'
      })
      .state('basic_table', {
        url: '/basic_table',
        controller: 'BasicTableController',
        templateUrl: 'app/basic_table/basic_table.html'
      })
      .state('blank', {
        url: '/blank',
        controller: 'BlankController',
        templateUrl: 'app/blank/blank.html'
      })
      .state('buttons', {
        url: '/buttons',
        controller: 'ButtonsController',
        templateUrl: 'app/buttons/buttons.html'
      })
      .state('calendar', {
        url: '/calendar',
        controller: 'CalendarController',
        templateUrl: 'app/calendar/calendar.html'
      })
      .state('chartjs', {
        url: '/chartjs',
        controller: 'ChartjsController',
        templateUrl: 'app/chartjs/chartjs.html'
      })
      .state('form_component', {
        url: '/form_component',
        controller: 'FormComponentController',
        templateUrl: 'app/form_component/form_component.html'
      })
      .state('gallery', {
        url: '/gallery',
        controller: 'GalleryController',
        templateUrl: 'app/gallery/gallery.html'
      })
      .state('general', {
        url: '/general',
        controller: 'GeneralController',
        templateUrl: 'app/general/general.html'
      })
      .state('morris', {
        url: '/morris',
        controller: 'MorrisController',
        templateUrl: 'app/morris/morris.html'
      })
      .state('panels', {
        url: '/panels',
        controller: 'PanelsController',
        templateUrl: 'app/panels/panels.html'
      })
      .state('responsive_table', {
        url: '/responsive_table',
        controller: 'ResponsiveTableController',
        templateUrl: 'app/responsive_table/responsive_table.html'
      })
      .state('todo_list', {
        url: '/todo_list',
        controller: 'TodoListController',
        templateUrl: 'app/todo_list/todo_list.html'
      })
      .state('profile', {
        url: '/profile',
        controller: 'ProfileController',
        templateUrl: 'app/profile/profile.html'
      });

    // $urlRouterProvider.otherwise('/');

    $locationProvider.hashPrefix('');

    // Comment out the line below to run the app
    // without HTML5 mode (will use hashes in routes)
    $locationProvider.html5Mode(true);
  }

})();
