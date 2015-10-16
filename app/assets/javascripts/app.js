angular.module('trainingProgram', ['ui.router', 'templates', 'Devise', 'ui.calendar', 'restangular', 'youtube-embed', 'xeditable'])
	.config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

            $sceDelegateProvider.resourceUrlWhitelist([
                // Allow same origin resource loads.
                'self',
                 // Allow loading from our assets domain.  Notice the difference between * and **.
                'https://drive*.google.com/**'
            ]);
            
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
            .state('compete', {
                url: '/compete'
            })
            .state('training-routines', {
                url: '/training-routines',
                templateUrl: 'assets/training-routines.html' 
            })
            .state('training-routines.name', {
                url: '/training-routine', 
                views: {
                    { templateUrl: 'assets/training-routine.html' }, 
                    'exercises@build': { templateUrl: 'assets/categories.html'}, 
                    'workouts@build': { templateUrl: 'assets/workouts.html'}
                }
            })
            	templateUrl: 'assets/categories.html',
            	controller: 'categoriesCtrl'
             })
            .state('categories.id', {
                url: '/:id',
                templateUrl: 'assets/category.html',
                controller: 'categoryCtrl' 
            })
            .state('workouts', {
                url: '/workouts', 
                templateUrl: 'assets/workouts.html', 
                controller: 'workoutsCtrl'
            })
            .state('workouts.id', {
                url: '/:id', 
                templateUrl: 'assets/workout.html', 
                controller: 'workoutCtrl'
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
    
