angular.module('trainingProgram')
.controller('categoriesCtrl', [
	'$scope', 
	'$http', 
	'$stateParams', 
	'Restangular', 
	function ($scope, $http, $stateParams, Restangular) {
	
	console.log("categories controller"); 

	// Assign all catgories to a an array, baseCategories
	var baseCategories = Restangular.all('api/categories'); 
	
	// Place scope on categories for rendering in the view
	baseCategories.getList().then(function (categories) {
		$scope.primecategories = [];
		$scope.subcategories = []; 
		categories.forEach(function (category) {

			if (category.ancestry === null) { 
				// primecategory = category; 
				$scope.primecategories.push(category)
			} else {
				// subcategory = category;
				$scope.subcategories.push(category)
			}

		})
		console.log('primecategories: ', $scope.primecategories);
		console.log('subcategories: ', $scope.subcategories)
	})
	

}]); 

 