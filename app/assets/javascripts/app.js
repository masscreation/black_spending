angular.module('trainingProgram', ['ui.router', 'templates'])
	.config(['$stateProvider', '$urlRouterProvider', 
		function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('/', {
            	url: '/index',
                templateUrl: '/templates/index.html',
                controller: ''
            })
            .state('train', {
            	url: '/training-session', 
            	templateUrl: '/training_sessions/training-sessions.html',
            	controller: 'trainingSessionCtlr'
            })
            .state('categories', {
            	url: '/categories',
            	templateUrl: '/categories/categories.html',
            	controller: 'categoriesCtrl'
            })
            
        $urlRouterProvider.otherwise('train');

    }]);