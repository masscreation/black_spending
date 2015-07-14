angular.module('trainingProgram')
.controller('categoriesCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function ($scope, $http, $stateParams, Restangular) {
	
	console.log("categories controller"); 

	var baseCategories = Restangular.all('api/categories'); 
	console.log(baseCategories)
	
	baseCategories.getList().then(function (categories) {
		$scope.categories = categories; 
	})
}])
.controller('categoryCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function ($scope, $http, $stateParams, Restangular) {
	
	console.log("category controller"); 
	
	// $http.get('api/categories/' + $stateParams.id + '.json')
	Restangular.one('api/categories', $stateParams.id).get()
	.then(function (category) {
		$scope.category = category; 
		console.log(category);

		$scope.category.exercises = []; 
		
		$scope.category.getList('exercises').then(function (exercises) {
			exercises.forEach(function (exercise) {
				if (category.id === exercise.category_id) {
					$scope.category.exercises.push(exercise);
					console.log($scope.category.exercises); 
				}
			})
			
		})
		
	}); 
		
	  
 
		
}]); 