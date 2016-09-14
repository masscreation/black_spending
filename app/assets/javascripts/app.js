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
    'ngTouch', 
    'Devise'
  ])
  .config([
    '$stateProvider', 
    '$httpProvider',
    '$urlRouterProvider',
     'AuthProvider',
          function ( $stateProvider, $httpProvider, $urlRouterProvider, AuthProvider ) {
    $stateProvider
      .state( '/', {
        url: '/main',
        onEnter: [ '$state', 'Auth', function ( $state, Auth ) {
            if ( Auth.isAuthenticated ) {
                $state.go( 'dashboard.talent' )   
            } else {
                $state.go( 'signup' )
            } 
        }
      ]})
      .state( 'signup', {
        url: '/signup',
        templateUrl: 'assets/signup.html',
        controller: 'AuthCtrl'
      })
      .state( 'dashboard', {
        url: '/dashboard', 
        templateUrl: 'assets/jobs/dashboard.html', 
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
          .state( 'dashboard.id', {
            url: '/:id',
            templateUrl: 'assets/jobs/talent.html',
            controller: 'TalentCtrl', 
            controllerAs: 'people'
          })
          .state( 'dashboard.create-job', {
            url: '/create-job', 
            templateUrl: 'assets/jobs/create-job.html', 
          }); 

      $urlRouterProvider.otherwise( '/' );
  }]);