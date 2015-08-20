angular.module('trainingProgram') 
.controller('categoryCtrl', ['$scope', '$http', '$stateParams', 'Restangular', '$sce', function ($scope, $http, $stateParams, Restangular, $sce) {
	
	var _this = this
	$scope.categoryCtrl = _this;

	console.log("category controller"); 
	
	// Grab a single category
	Restangular.one('api/categories', $stateParams.id).get()
	.then(function (category) {
		$scope.category = category; 
		console.log('category: ', category.name);

		// Create an exercises array to hold exercises that belong to category
		$scope.category.exercises = []; 
		
		$scope.category.getList('exercises').then(function (exercises) {
			exercises.forEach(function (exercise) {
				if (category.id === exercise.category_id) {
					// Place exercises with IDs matching category in category's exercises array
					$scope.category.exercises.push(exercise);
					console.log('category exercises:', $scope.category.exercises);
					$scope.categoryCtrl.config = {
						sources: [
							{ src: $sce.trustAsResourceUrl("https://www.youtube.com/watch?v=" + exercise.video_url), type:"video/mp4" }
							]
					};
					console.log('categoryCtrl:', $scope.categoryCtrl)
					console.log('categoryCtrl.config.sources: ', $scope.categoryCtrl.config.sources[0]); 
					console.log('video url: ', exercise.video_url);   
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
