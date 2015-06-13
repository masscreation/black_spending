angular.module('trainingProgram')
.controller('categoriesCtrl', ['$scope', '$http', '$stateParams', 'categories', 'category', function ($scope, $http, $stateParams, categories, category) {
	console.log("categories controller")
	
	$scope.categories = categories.categories; 
	$scope.category = categories.categories($stateParams.id)
	

	return {
	    find: function(id){
	        return _.find($scope.categories, function(category){return category.id == id});
	    }
	};

    $scope.selectedCategory = $scope.categories.find($stateParams.id); 
    
	$scope.createCategory = function() {
		$http.post('api/categories.json', $scope.categories)
		.success(function(data) {
			$scope.categories.push(data); 

		})
		.error(data, function() {
			alert("No categories created"); 
		})
	}
}]); 