'use strict';

/**
 * @ngdoc overview
 * @name exampleAppApp
 * @description
 * # skilltapp
 *
 * Main module of the application.
 */
angular
  .module('skilltapp', [
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch'
  ])
  .config([
    '$stateProvider', 
    '$httpProvider',
    '$urlRouterProvider',
          function ($stateProvider, $httpProvider, $urlRouterProvider) {
    $stateProvider
      .state( '/', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state( 'signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'AuthCtrl'
      })
      .state( 'dashboard', {
        url: '/dashboard', 
        templateUrl: 'views/jobs/dashboard.html', 
        controller: 'DashboardCtrl',
        controllerAs: 'jobs'
      })
          .state( 'dashboard.talent', {
            url: '/talent',
            templateUrl: 'views/jobs/talent.html'
          })
          .state('dashboard.talent.id', {
            url: '/:id', 
            templateUrl: 'views/jobs/talented.html',
            controller: 'TalentCtrl', 
            controllerAs: 'people'
          })
          .state( 'dashboard.create-job', {
            url: '/create-job', 
            templateUrl: 'views/jobs/create-job.html', 
          }); 

      $urlRouterProvider.otherwise( '/' );
  }]);