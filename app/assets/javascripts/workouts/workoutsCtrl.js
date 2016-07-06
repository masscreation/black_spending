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
	
	baseWorkouts.getList().then(function (workouts) {
		$scope.workouts = workouts; 
		$scope.workouts.forEach(function (workout) {
			// if (workout.trainer_id === Auth.currentUser().id) {
				// $scope.workouts.push(workout) 
			// };
			workout.exercises = []; 
			workout.getList('workout_exercises').then(function (exercises) {
				exercises.forEach(function (exercise) {
					workout.exercises.push(exercise);
				})
				console.log(workout.name, 'has ', workout.exercises)
			})
		})
	}); 

	Auth.currentUser().then(function (user) {
		$scope.trainer = user
	})

	// Slick carousel
	$scope.slickConfig = {
    	enabled: true,
    	arrows: true, 
    	swipe: false, 
    	dots: false, 
    	autoplay: false,
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
      $scope.slickConfig.enabled = !$scope.slickConfig.enabled
      console.log('toggleSlick ran')
    }; 

    $scope.toggleSlick(); 

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
		$scope.workout.workout_exercises = []; 
		
		$scope.workout.getList('workout_exercises').then(function (exercises) {
			
			$scope.workout.workout_exercises.push(exercises)
			console.log(workout.name + ' workout exercises: ' + exercises)
		}); 

		// Add workout exercises to $scope.workout
		$scope.addExercises = function(exercises) {
			var workout_exercises = Restangular.service('workout_exercises', $scope.workout); 
			exercises.forEach(function(exercise) {
				var workout_exercise = {}; 
				workout_exercise.exercise_id = exercise.id; 
				workout_exercise.workout_id = $scope.workout.id; 
				workout_exercises.post(workout_exercise); 
				console.log('added workout exercise, ', exercise)
			})
		}	
		
	}); 

	var allExercises = Restangular.all('api/exercises')

	allExercises.getList().then(function (exercises) {
		$scope.exercises = exercises;
		$scope.exercises.forEach(function(exercise) {
			exercise.category = {};
			Restangular.all('api/categories').getList().then(function (categories) {
				categories.forEach(function (category) {
					if (exercise.category_id === category.id) {
						exercise.category = category
					}
				})
				console.log('exercise category: ', exercise, exercise.category.name)
			})

		})
	});

	// $select.selected = $scope.workout.workout_exercises; 

	$scope.disabled = undefined;

  	$scope.searchEnabled = undefined;


  	$scope.enable = function() {
    	$scope.disabled = false;
  	};

  	$scope.disable = function() {
    	$scope.disabled = true;
    	// on disable
    	if ($scope.selectedExercises) {
    		$scope.addExercises($scope.selectedExercises)
    	}
  	};

  	$scope.enableSearch = function() {
    	$scope.searchEnabled = true;
  	};


	$scope.disableSearch = function() {
		$scope.searchEnabled = false;
	};

	$scope.selectedExercises = [];

	// Clear exercise selection
 	$scope.clear = function() {
    	choices.remove()
  	};



	// Slick carousel
	// $scope.slickSelectConfig = {
 //    	enabled: true,
 //    	arrows: true, 
 //    	swipe: true, 
 //    	dots: false, 
 //    	autoplay: false,
 //    	draggable: true, 
 //    	autoplaySpeed: 2000,
 //    	method: {},
 //    	event: {
 //        	beforeChange: function (event, slick, currentSlide, nextSlide) {

 //        	},
 //        	afterChange: function (event, slick, currentSlide, nextSlide) {

 //        	}
 //    	}
	// };
	// $scope.toggleSlick = function() {
 //      $scope.slickSelectConfig.enabled = !$scope.slickSelectConfig.enabled
 //      console.log('toggleSlick ran')
 //    }; 

 //    $scope.toggleSlick(); 

}])
.filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      var keys = Object.keys(props);
        
      items.forEach(function(item) {
        var itemMatches = false;

        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
});