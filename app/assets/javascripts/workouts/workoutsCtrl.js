angular.module('trainingProgram')
.controller('workoutsCtrl', [
	'$scope', 
	'$http', 
	'$stateParams', 
	'Restangular', 
	'Auth', 
	function ($scope, $http, $stateParams, Restangular, Auth) {
	
	console.log("workouts controller"); 

	var baseWorkouts = Restangular.all('api/workouts'); 
	console.log(baseWorkouts)
	
	
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

	//Create new workouts
	$scope.createWorkout = function (workout) {
		// Tag workout to current logged in trainer
		$scope.workout.trainer_id = currentUser().id
		var allWorkouts = Restangular.all('api/workouts');
		allWorkouts.post(workout); 

		// Clear workout form
		$scope.workout.name = '';
		$scope.workout.description = ''
	}
}])
.controller('workoutCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function ($scope, $http, $stateParams, Restangular) {

	Restangular.one('api/workouts', $stateParams.id).get()
	.then(function (workout) {
		$scope.workout = workout; 
		console.log('Workout is:', workout);

		$scope.workout.exercises = []; 
		
		$scope.workout.getList('workout_exercises').then(function (exercises) {
			exercises.forEach(function (exercise) {
				if (workout.id === exercise.workout_id) {
					$scope.workout.exercises.push(exercise);
					console.log($scope.workout.exercises) 
				}
			})
			
		})
		
	}); 
}]); 