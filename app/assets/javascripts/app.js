angular.module('trainingProgram', [
    'ui.router', 
    'templates', 
    'Devise', 
    'ui.calendar', 
    'restangular', 
    'youtube-embed', 
    'xeditable'])
	.config([
        '$stateProvider', 
        '$urlRouterProvider', 
        '$sceDelegateProvider', 
        'AuthProvider',
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider, AuthProvider) {


            AuthProvider.registerMethod('POST');
            AuthProvider.loginMethod('GET');

            AuthProvider.resourceName('athlete');
            AuthProvider.registerPath('api/athletes');
            AuthProvider.loginPath('api/athletes');
            

            $sceDelegateProvider.resourceUrlWhitelist([
                // Allow same origin resource loads.
                'self',
                 // Allow loading from our assets domain.  Notice the difference between * and **.
                'https://drive*.google.com/**'
            ]);
            
        $stateProvider
            .state('home', {
            	url:         '/',
                templateUrl: 'assets/home.html',
                controller:  'authCtrl'
            })
            .state('train', {
                url:         '/train', 
                templateUrl: '/assets/athlete/athlete-training-sessions.html', 
                controller:  'athleteTrainingSessionsCtrl'
            })
            .state('athlete-profile', {
                url:         '/athlete-profile', 
                templateUrl: '/assets/athlete/athlete-profile.html', 
                controller:  'athleteProfileCtrl'
            })
            // .state('compete', {
            //     url:         '/compete', 
            //     templateUrl: 'assets/competition-dashboard.html',
            //     controller:  'competitionCtrl'
            // })
            // .state('compete.challenges', {
            //     url:         '/:challenges', 
            //     templateUrl: 'challenges.html', 
            //     controller:  'athleteChallengesCtrl'
            // })
            // .state('compete.arena' : {
            //         templateUrl: 'arena.html',
            //         controller:  'challengesCtrl'
            //     }, 
            //     'compete@challenge-account' : {
            //         templateUrl: 'challenge-account.html',
            //         controller:  'bitcoinCtrl'
            //     }  
            // })
            .state('trainer-profile', {
                url:         '/trainer-profile', 
                templateUrl: '/assets/trainer/trainer-profile.html',
                controller:  'trainerProfileCtrl'
            })
            .state('routines', {
                url: '/routines', 
                templateUrl: '/assets/trainer/training-routines.html',
                controller: 'trainingRoutinesCtrl' 

            })
            .state('routines.id', {
                url: '/:id', 
                views: {
                    // the main template will be placed here (relatively named)
                   '': {templateUrl: '/assets/training-routine.html'}, 

                   'workouts@routines.id': { 
                        templateUrl: 'assets/trainer/workouts.html', 
                        controller: 'workoutsCtrl'
                    }, 
                   'categories@routines.id': {
                        templateUrl: 'assets/trainer/categories.html',
                        controller: 'categoriesCtrl'
                    },
                    'training-sessions@routines.id': {
                        templateUrl: 'assets/trainer/training-sessions.html',
                        controller: 'trainingSessionsCtrl' 
                    }
                },
                controller: 'trainingRoutineCtrl' 
            })
            .state('categories', {
                url: '/categories', 
            	templateUrl: 'assets/trainer/categories.html',
            	controller: 'categoriesCtrl'
             })
            .state('categories.id', {
                url: '/:id',
                templateUrl: 'assets/trainer/category.html',
                controller: 'categoryCtrl' 
            })
            .state('workouts', {
                url: '/workouts', 
                templateUrl: 'assets/trainer/workouts.html', 
                controller: 'workoutsCtrl'
            })
            .state('workouts.id', {
                url: '/:id', 
                templateUrl: 'assets/trainer/workout.html', 
                controller: 'workoutCtrl'
            })
            .state('login', {
              url: '/login',
              templateUrl: 'assets/_login.html',
              controller: 'authCtrl',
              onEnter: ['$state', 'Auth', function ($state, Auth) {
                if (Auth.isAuthenticated) {

                    Auth.currentUser().then(function (user){
                        console.log('user is:', currentUser().type);
                        // Differentiate between user types to route
                        if (user.type === "Athlete") {
                            $state.go('train')
                        } else {
                            $state.go('routines')
                        }
                    }, function (error) {
                        // Handle errors
                        console.log('error:', error)
                    })
                }         
            }]
            })
            .state('register', {
                url: '/register',
                templateUrl: 'assets/_register.html',
                controller: 'authCtrl',
                onEnter: ['$state', 'Auth', function ($state, Auth) {
                    console.log('user is authenticated? ', Auth.isAuthenticated()); 
                    if (Auth.isAuthenticated()) {
                        console.log('redirecting to Login')
                        Auth.currentUser().then(function (user) {
                            console.log('user is:', user.type);
                            // Send registered user to log in
                            $state.go('login'); 
                        }), function (error) {
                            // Handle error
                            console.log('error:', error)
                        }
                    }
                }]
            }); 
            
        $urlRouterProvider.otherwise('/');

    }]); 
    
