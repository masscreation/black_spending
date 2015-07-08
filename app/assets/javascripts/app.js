angular.module('trainingProgram', ['ui.router', 'templates', 'Devise', 'ui.calendar'])
	.config(['$stateProvider', '$urlRouterProvider', 
		function ($stateProvider, $urlRouterProvider) {
            
        $stateProvider
            .state('home', {
            	url: '/',
                templateUrl: 'assets/home.html',
                controller: 'homeCtlr'
            })
            .state('profile', {
                url: '/profile', 
                templateUrl: 'assets/profile.html',
                controller: 'profileCtrl'
            })
            .state('train', {
            	url: '/train', 
            	templateUrl: 'assets/training-sessions.html',
            	controller: 'trainingSessionCtlr'
            })
            .state('categories', {
            	url: '/categories',
            	templateUrl: 'assets/categories.html',
            	controller: 'categoriesCtrl'
             })
            .state('categories.id', {
                url: '/:id',
                templateUrl: 'assets/category.html',
                controller: 'categoryCtrl' 
            })
            .state('exercises', {
                url: '/exercises',
                templateUrl: 'assets/exercises.html',
                controller: 'exercisesCtrl'
            })
            .state('login', {
              url: '/login',
              templateUrl: 'assets/_login.html',
              controller: 'authCtrl',
              onEnter: ['$state', 'Auth', function ($state, Auth) {
                    Auth.currentUser().then(function (){
                        $state.go('train');
                    }); 
                }]
            })
            .state('register', {
                url: '/register',
                templateUrl: 'assets/_register.html',
                controller: 'authCtrl',
                onEnter: ['$state', 'Auth', function ($state, Auth) {
                    Auth.currentUser().then(function (){
                        $state.go('train');
                    })
                }]
            }); 
            
        $urlRouterProvider.otherwise('/');

    }]); 
    
