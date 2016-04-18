angular.module('trainingProgram', [
    'ui.router', 
    'templates', 
    'Devise', 
    'ui.calendar',
    // 'ui.bootstrap', 
    'restangular', 
    'youtube-embed', 
    'xeditable',
    'ngTagsInput'])
	.config([
        '$stateProvider', 
        '$httpProvider',
        '$urlRouterProvider', 
        '$sceDelegateProvider', 
        'AuthProvider',
		function ($stateProvider, $httpProvider, $urlRouterProvider, $sceDelegateProvider, AuthProvider) {
 
            // AuthProvider.registerMethod('POST');
            // AuthProvider.loginMethod('GET');
            // AuthProvider.logoutMethod('DELETE')

            // AuthProvider.resourceName('athlete');
            // AuthProvider.registerPath('/api/athletes');
            // AuthProvider.loginPath('/api/athletes');
            // AuthProvider.logoutPath('/api/users/sign_out'); 
            console.log('resource name:', AuthProvider.resourceName()); 

            
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
                controller:  'authCtrl', 
                onEnter: ['$state', 'Auth', function ($state, Auth) {
                    Auth.currentUser().then(function (user) {
                        console.log('user role:', user.role); 
                        if (user.role === "Athlete") {
                            $state.go('athlete-profile')
                        } else {
                            $state.go('trainer-profile')
                        }
                    }); 
                }]
            })
            .state('train', {
                url:         '/train', 
                templateUrl: '/assets/athlete/athlete-training-sessions.html', 
                controller:  'athleteTrainingSessions'
            })
             .state('programs', {
                url: '/programs', 
                templateUrl: '/assets/programs.html', 
                controller: 'athleteProgramsCtrl'
            })
            .state('programs.id', {
                url: '/:id', 
                templateUrl: '/assets/program.html', 
                controller: 'athleteProgramCtrl'
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
            //     'compete.challenge-account' : {
            //         templateUrl: 'challenge-account.html',
            //         controller:  'bitcoinCtrl'
            //     }  
            // })
            .state('trainer-profile', {
                url:         '/trainer-profile', 
                templateUrl: '/assets/trainer/trainer-profile.html',
                controller:  'trainerProfileCtrl'
            })
            // Routines 
            .state('routines', {
                url: '/routines', 
                templateUrl: '/assets/trainer/training-routines.html',
                controller: 'trainingRoutinesCtrl' 
            })
            .state('routines.id', {
                url: '/:id',
                parent: 'routines', 
                views: {
                    // the main template will be placed here (relatively named)
                   '': {
                        templateUrl: '/assets/trainer/training-routine.html', 
                        controller: 'trainingRoutineCtrl' 
                    }, 
                    // Absolutely targets the "categories" view in this state,  routines.id
                   'categories@routines.id': { 
                        templateUrl: '/assets/trainer/categories.html',
                        controller: 'categoriesCtrl'
                    }, 
                    'categories.id@routines.id': {         
                        templateUrl: '/assets/trainer/category.html', 
                        controller: 'categoryCtrl'
                    },
                   // Absolutely targets the "workouts" view in this state,  routines.id 
                   'workouts@routines.id': { 
                        templateUrl: '/assets/trainer/workouts.html', 
                        controller: 'workoutsCtrl'
                    },
                    // Absolutely targets the "training-sessions" view in this state,  routines.id
                    'training-sessions@routines.id': {
                        templateUrl: '/assets/trainer/training-sessions.html',
                        controller: 'trainingSessionsCtrl' 
                    } 
                }
            })
            // Training Sessions
            .state('routines.id.training-sessions', {
                url: '/:id/training-sessions', 
                templateUrl: '/assets/trainer/training-sessions.html',
                controller: 'trainingSessionsCtrl' 
            }) 
            // Exercises
            .state('categories', {
                url: '/categories', 
            	templateUrl: '/assets/trainer/categories.html',
            	controller: 'categoriesCtrl'
             })
            .state('categories.id', {
                url: '/:id',
                templateUrl: '/assets/trainer/category.html',
                controller: 'categoryCtrl' 
            })
            .state('workouts', {
                url: '/workouts', 
                templateUrl: '/assets/trainer/workouts.html', 
                controller: 'workoutsCtrl'
            })
            .state('workouts.id', {
                url: '/:id', 
                templateUrl: '/assets/trainer/workout.html', 
                controller: 'workoutCtrl'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/assets/_register.html',
                controller: 'authCtrl',
                onEnter: ['$state', 'Auth', function ($state, Auth) {
                    Auth.currentUser().then(function (user) {
                        if (user.type === "Athlete") {
                            $state.go('athlete-profile')
                        } else {
                            $state.go('trainer-profile')
                        }
                    }); 
                }]
            })
            .state('login', {
                url: '/login',
                templateUrl: '/assets/_login.html',
                controller: 'authCtrl',
                onEnter: ['$state', 'Auth', function($state, Auth) {
                  Auth.currentUser().then(function (){
                    $state.go('home');
                  })
                }]
            }); 
            
        $urlRouterProvider.otherwise('/');

    }]); 
    
