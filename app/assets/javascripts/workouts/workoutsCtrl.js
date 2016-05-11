angular.module('trainingProgram')
.controller('workoutsCtrl', [
	'$scope', 
	'$http', 
	'$stateParams', 
	'Restangular', 
	'Auth',
	'$state',  
	function ($scope, $http, $stateParams, Restangular, Auth, $state) {
	
	console.log("workouts controller"); 

	var baseWorkouts = Restangular.all('api/workouts'); 
	console.log('workouts: ', baseWorkouts); 
	
	
	baseWorkouts.getList().then(function (workouts) {
		$scope.workouts = []; 
		workouts.forEach(function (workout) {
			if (workout.trainer_id === Auth.currentUser().id) {
				$scope.workouts.push(workout) 
			}
		})
	}); 

	Auth.currentUser().then(function (user) {
		$scope.trainer = user
	})

	// Slick carousel
	$scope.slickConfig = {
    	enabled: true,
    	arrows: false, 
    	swipe: false, 
    	dots: false, 
    	autoplay: true,
    	draggable: true, 
    	autoplaySpeed: 2000,
    	method: {},
    	event: {
        	beforeChange: function (event, slick, currentSlide, nextSlide) {

        	},
        	afterChange: function (event, slick, currentSlide, nextSlide) {

        	}
    	}
	};
	$scope.toggleSlick = function() {
      $scope.slickConfig.enabled 
      console.log('toggleSlick ran')
    }

	//Create new workouts
	$scope.createWorkout = function (workout) {
		$scope.workouts.push(workout)
		// Tag workout to current logged in trainer
		var allWorkouts = Restangular.all('api/workouts');
		allWorkouts.post(workout).then(function() {
			// Clear workout form
			$scope.workout.name = '';
			$scope.workout.description = ''
		})

	};

	$scope.deleteWorkout = function (workout, $state) {
		console.log('deleting workout...'); 
		$scope.workouts.pop(workout); 
		Restangular.one('api/workouts', workout.id).get().then(function (workout) {
			workout.remove().then(function() {
				console.log('workout deleted');
			})
		})
	}; 

}])
.controller('workoutCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function ($scope, $http, $stateParams, Restangular) {

	Restangular.one('api/workouts', $stateParams.id).get()
	.then(function (workout) {
		$scope.workout = workout; 
		console.log('Workout is:', workout);
		
		$scope.workout.getList('workout_exercises').then(function (exercises) {
			
			$scope.workout_exercises = exercises
			console.log('workout exercises', exercises)
		})
		
	}); 

}]); 