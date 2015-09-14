angular.module('trainingProgram') 
.controller('categoryCtrl', ['$scope', '$http', '$stateParams', 'Restangular', '$sce', 'exercisesSrvc', 
	function ($scope, $http, $stateParams, Restangular, $sce, exercisesSrvc) {


	console.log("category controller"); 
	
	// Grab a single category
	Restangular.one('api/categories', $stateParams.id).get()
	.then(function (category) {
		$scope.category = category; 
		console.log('category: ', category);
		if (category.ancestry !== null ) {
			ancestryArray = category.ancestry.split("/"); 
			ancestryArray.forEach(function (id) {
				$scope.parents = [];  
				Restangular.one('api/categories', parseInt(id)).get()
				.then(function (parent) {
					category.parent = parent;  
					$scope.parents.push(parent); 
					console.log('parent is ', parent); 
					console.log('parents are ', $scope.parents)
				})
			})
		};  
	
		
	
		// Create an exercises array to hold exercises that belong to category
		$scope.category.exercises = []; 
		
		$scope.category.getList('exercises').then(function (exercises) {
			exercises.forEach(function (exercise) {
				if (category.id === exercise.category_id) {
					// Place exercises with IDs matching category in category's exercises array
					$scope.category.exercises.push(exercise);

					console.log($scope.category.exercises); 
				}; 

			})
			
		})
		
	}); 

	$scope.playerVars = {
		controls: 0,
		rel: 0
	};  
	
	// Create exercise for selected category
	$scope.createExercise = function(exercise) {
		var allExercises = Restangular.all('api/exercises');
		console.log('createExercise'); 
		// Tag created exercise with category_id using stateParams
		$scope.exercise.category_id = $stateParams.id; 
	 	allExercises.post(exercise).then(function (exercise) {
	 		console.log('Just created exercise:', exercise); 
	 		$scope.exercise.name = ''; 
	 		$scope.exercise.description = ''; 
	 		$scope.exercise.instructions = ''; 
	 		$scope.exercise.video_url = ''
	 	})
	}; 
		
		
}]); 
