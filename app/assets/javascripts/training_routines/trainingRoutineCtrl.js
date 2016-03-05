angular.module('trainingProgram')
.controller('trainingRoutinesCtrl', [
	'$scope', 
	'$http', 
	'$stateParams', 
	'Restangular', 
	'Auth',
	'exercises',
	'$q',
	function ($scope, $http, $stateParams, Restangular, Auth, exercises, $q) { 
	
	var deferred = $q.defer(); 
	var promise = exercises.getExercises(); 

	promise.then(function(exercises) {
		console.log('controller exercises: ', exercises.data); 
		$scope.exercises = exercises
	}); 

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

		var allRoutines = Restangular.all('api/training_routines');

		// Training routine tags
		var allTags = Restangular.all('api/tags'); 

		allTags.getList().then(function(tags) {
			$scope.tags = tags; 
			console.log('tags: ', tags)
		});

		$scope.loadTags = function (query) {
			console.log('query :', query);
			return $http.get('api/tags?query=' + query)
		};

		console.log('loadTags: ', $scope.loadTags());

		$scope.createRoutine = function(routine) {
			
			// Associate training routine with current trainer
			$scope.routine.trainer_id = user.id;
			console.log(user.id); 
			// Push routine to trainer's routines
			// $scope.trainerRoutines.push(routine);  
			// Post routine to routines
			allRoutines.post(routine);
			// Clear training routine form inputs
			$scope.routine.name = ''; 
	 		$scope.routine.description = ''; 
	 		$scope.routine.tags = ''; 
	 		$scope.routine.duration = '';
	 		$scope.routine.video_url = '';
	 		$scope.routine.cost = ''; 
	 		$scope.routine.free_trial = ''; 
	 		$scope.routine.free_trial_duration = ''  
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