angular.module('trainingProgram')
.controller('workoutsCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function ($scope, $http, $stateParams, Restangular) {
	
	console.log("workouts controller"); 

	var baseWorkouts = Restangular.all('api/workouts'); 
	console.log(baseWorkouts)
	
	baseWorkouts.getList().then(function (workouts) {
		$scope.workouts = workouts; 
	})

	createWorkout = function (workout) {
		var allWorkouts = Restangular.all('api/workouts');
		allWorkouts.post(workout)
	}
}])
.controller('workoutCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function ($scope, $http, $stateParams, Restangular) {

	console.log('workout controller'); 

	Restangular.one('api/workouts', $stateParams.id).get()
	.then(function (workout) {
		$scope.workout = workout; 
		console.log(workout);

		$scope.workout.exercises = []; 
		
		$scope.workout.getList('exercises').then(function (exercises) {
			exercises.forEach(function (exercise) {
				if (workout.id === exercise.workout_id) {
					$scope.workout.exercises.push(exercise);
					console.log($scope.workout.exercises); 
				}
			})
			
		})
		
	}); 
}]); 