angular.module('trainingProgram')
.controller('trainingRoutinesCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function ($scope, $http, $stateParams, Restangular) { 
	
	var baseRoutines = Restangular.all('api/training_routines'); 

	baseRoutines.getList().then(function (routines) {
		$scope.routines = routines
	}); 

	$scope.createRoutine = function(routine) {
		var allRoutines = Restangular.all('api/training_routines');
		//Associate training routine with current trainer
		//$scope.routine.trainer_id = current_trainer.id

		// post routine to routines
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