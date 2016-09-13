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
			$scope.routines = routines 
			console.log('routines: ', routines); 
			$scope.trainerRoutines = [];

			routines.forEach(function (routine) {
				if (routine.user_id === user.id) {
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
		// Slick carousel
		$scope.slickConfig = {
	    	
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

		$scope.loadTags = function(query) {
			return $http.get('api/tags?query=' + query)
  		};

		console.log('loadTags: ', $scope.loadTags());

		$scope.createRoutine = function(routine) {
			// Associate training routine with current trainer
			$scope.routine.trainer_id = user.id;
			// Convert routine.tags (objects) names into strings and 
			// and assign to routine.focus
			console.log("routine focus split", routine.focus.split());

			// Assign routine tags to a variable 
			var allRoutineTags = Restangular.all('api/RoutineTags');
			// Post to routine tags
			routine.focus.forEach(function(tag) {
				var routine_tag = {};
				routine_tag.tag_id = tag.id; 
				routine_tag.training_routine_id = routine.id; 
				allRoutineTags.post(routine_tag); 
				console.log(routine_tag)
			});

			// Push routine to the scope
			$scope.routines.push(routine);
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