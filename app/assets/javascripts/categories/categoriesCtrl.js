angular.module('trainingProgram')
.controller('categoriesCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function ($scope, $http, $stateParams, Restangular) {
	
	console.log("categories controller"); 

	// Assign all catgories to a an array, baseCategories
	var baseCategories = Restangular.all('api/categories'); 
	console.log(baseCategories)
	
	// Place scope on categories for rendering in the view
	baseCategories.getList().then(function (categories) {
		$scope.categories = [];
		categories.forEach(function (category) {
			category.subcategories = []; 
			if (category.ancestry === null) {
				$scope.categories.push(category)
			}
		})
		
	})
}]); 

 