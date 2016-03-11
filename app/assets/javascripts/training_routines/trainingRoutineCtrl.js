angular.module('trainingProgram')
.controller('trainingRoutinesCtrl', [
	'$scope', 
	'$http', 
	'$stateParams', 
	'Restangular', 
	'Auth',
	'exercises',
	'tags', 
	'$q',
	function ($scope, $http, $stateParams, Restangular, Auth, exercises, tags, $q) { 
	
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

		$scope.loadTags = function(query) {
			return $http.get('api/tags?query=' + query)
  		};

		console.log('loadTags: ', $scope.loadTags());

		$scope.createRoutine = function(routine) {
			
			// Associate training routine with current trainer
			$scope.routine.trainer_id = user.id;
			console.log(user.id); 

			// Convert routine.tags (objects) names into strings and 
			// and assign to routine.focus
			routine.focus = function() {
				var tags = [];
				routine.tags.forEach(function(tag) {
					tags.push(tag.name)
				}); 
				var newTags = tags.join(", "); 

				console.log(newTags); 

				return newTags
			}

			// Post routine to routines
			allRoutines.post(routine);
			// Clear training routine form inputs
			$scope.routine.name = ''; 
	 		$scope.routine.description = ''; 
	 		$scope.routine.tags = ''; 
	 		$scope.routine.duration = '';
	 		$scope.routine.sessions_per_week = ''; 
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
.filter('tagNames', function () {
	return function(tag) {
		return tag.name	
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