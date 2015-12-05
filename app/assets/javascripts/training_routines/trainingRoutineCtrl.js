angular.module('trainingProgram')
.controller('trainingRoutinesCtrl', [
	'$scope', 
	'$http', 
	'$stateParams', 
	'Restangular', 
	'Auth', 
	function ($scope, $http, $stateParams, Restangular, Auth) { 
	
	// Grab training_routines 
	var baseRoutines = Restangular.all('api/training_routines'); 
	
	baseRoutines.getList().then(function (routines) {
		$scope.allRoutines = routines
	})

	console.log('routines:', baseRoutines);
	// Tag routines to a $scope for displaying in the view
	baseRoutines.getList().then(function (routines) {
		$scope.trainerRoutines = []
		if (Auth.isAuthenticated && Auth.currentUser().type === 'Trainer') {
			routines.forEach(function (routine) {
				if (routine.trainer_id === Auth.currentUser().id) {
					$scope.trainerRoutines.push(routine)
				}
			})
		}

		// routines.forEach(function(routine) {
		// 	routine.focus = ""; 
		// 	routine.training_sessions.forEach(function(trainingSession) {
		// 		trainingSession.
		// 	})
		// })
		
	}); 

	$scope.playerVars = {
		controls: 0,
		rel: 0
	};  

	$scope.createRoutine = function(routine) {
		var allRoutines = Restangular.all('api/training_routines');
		
		//Associate training routine with current trainer
		// $scope.routine.trainer_id = current_trainer.id

		// Post routine to routines
		allRoutines.post(routine);

		// Clear training routine form inputs
		$scope.routine.name = ''; 
 		$scope.routine.description = ''; 
 		$scope.routine.focus = ''; 
 		$scope.routine.duration = ''
	}; 
}])
.controller('trainingRoutineCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function ($scope, $http, $stateParams, Restangular) { 

	console.log('trainingRoutineCtrl'); 

	Restangular.one('api/training_routines', $stateParams.id).get()
	.then(function (routine) {
		$scope.routine = routine; 
		console.log('Training Routine:', routine); 

	}); 

}]); 