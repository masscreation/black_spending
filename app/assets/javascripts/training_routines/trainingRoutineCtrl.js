angular.module('trainingProgram')
.controller('trainingRoutinesCtrl', [
	'$scope', 
	'$http', 
	'$stateParams', 
	'Restangular', 
	'Auth', 
	function ($scope, $http, $stateParams, Restangular, Auth) { 
	
	// Authenticate current trainer
	Auth.currentUser().then(function (user) {
		console.log('user is:', user); 
		$scope.trainer = user;  
		var allRoutines = Restangular.all('api/training_routines');
		// Tag routines to a $scope for displaying in the view 
		
		allRoutines.getList().then(function (routines) {
			$scope.trainerRoutines = [];

			routines.forEach(function (routine) {
				if (routine.trainer_id === user.id) {
					$scope.trainerRoutines.push(routines); 
					console.log("trainer's routines:", $scope.trainerRoutines) 
				}
			})
		})
		
		// user.getList('training_routines').then(function (routines) {
	
		$scope.playerVars = {
			controls: 0,
			rel: 0
		};  

		$scope.createRoutine = function(routine) {

			var allRoutines = Restangular.all('api/training_routines');
			
			// Associate training routine with current trainer
			$scope.routine.trainer_id = user.id;
			// Push routine to trainer's routines
			$scope.trainerRoutines.push(routine);  
			// Post routine to routines
			allRoutines.post(routine);
			// Clear training routine form inputs
			$scope.routine.name = ''; 
	 		$scope.routine.description = ''; 
	 		$scope.routine.focus = ''; 
	 		$scope.routine.duration = '';
	 		$scope.routine.video_url = ''
		};
	});  
}])
.filter('yesNo', function() {
    return function(input) {
        return input ? 'yes' : 'no';
    }
})
.controller('trainingRoutineCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function ($scope, $http, $stateParams, Restangular) { 

	console.log('trainingRoutineCtrl'); 

	Restangular.one('api/training_routines', $stateParams.id).get()
	.then(function (routine) {
		$scope.routine = routine; 
		console.log('Training Routine:', routine); 

	}); 

}]); 