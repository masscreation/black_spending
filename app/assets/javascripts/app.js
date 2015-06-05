angular.module('trainingProgram', ['ui.router', 'templates'])
	.config(['$stateProvider', '$urlRouterProvider', 
		function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
            	url: '/',
                templateUrl: 'assets/home.html',
                controller: 'homeCtlr'
            })
            .state('train', {
            	url: '/train', 
            	templateUrl: 'assets/training-sessions.html',
            	controller: 'trainingSessionCtlr'
            })
            .state('exercises', {
                url: '/exercises',
                templateUrl: 'assets/exercises.html',
                controller: 'exercisesCtrl'
            })
            .state('categories', {
            	url: '/categories',
            	templateUrl: 'assets/categories.html',
            	controller: 'categoriesCtrl' 

            })
            .state('categories.id', {
                url: '/:id',
                templateUrl: 'assets/category.html',
                controller: 'categoriesCtrl' 
            }); 
            
        $urlRouterProvider.otherwise('/');

    }]); 
    
