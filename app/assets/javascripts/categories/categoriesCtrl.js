angular.module('trainingProgram')
.controller('categoriesCtrl', ['categoriesSrvc', '$scope', '$http', '$stateParams', function (categoriesSrvc, $scope, $http, $stateParams) {
	console.log("categories controller"); 
	
	categoriesSrvc.getCategories().then(function (categories) {
		$scope.categories = categories.data; 
		console.log(categories.data); 
	});  

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