angular.module('trainingProgram') 
.controller('categoryCtrl', ['$scope', '$http', '$stateParams', 'Restangular', '$sce', function ($scope, $http, $stateParams, Restangular, $sce) {
	
	$scope.categoryCtrl = this;

	$scope.categoryCtrl.config = {
		sources: 
			{ src: $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + "{{exercise.video_url}}" + "?autoplay=0"), type:"video/mp4" }
				
	};

	console.log("category controller"); 
	console.log("State Params ID:", $stateParams.id); 
	
	// Grab a single category
	Restangular.one('api/categories', $stateParams.id).get()
	.then(function (category) {
		$scope.category = category; 
		console.log(category);

		// Create an exercises array to hold exercises that belong to category
		$scope.category.exercises = []; 
		
		$scope.category.getList('exercises').then(function (exercises) {
			exercises.forEach(function (exercise) {
				if (category.id === exercise.category_id) {
					// Place exercises with IDs matching category in category's exercises array
					$scope.category.exercises.push(exercise);
					console.log($scope.category.exercises); 
				}
			})
			
		})
		
	}); 
		
	$scope.createExercise = function(exercise) {
		var allExercises = Restangular.all('api/exercises');
		console.log('createExercise'); 
		// Tag created exercise with category_id using stateParams
		$scope.exercise.category_id = $stateParams.id; 
	 	allExercises.post(exercise).then(function () {
	 		$scope.exercise.name = ''; 
	 		$scope.exercise.description = ''; 
	 		$scope.exercise.instructions = ''
	 	})
	}; 
		
		
}]); 
