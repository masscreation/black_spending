angular.module('trainingProgram')
.controller('categoriesCtrl', ['categoriesSrvc', '$scope', '$http', '$stateParams', function (categoriesSrvc, $scope, $http, $stateParams) {
	
	console.log("categories controller"); 
	
	$scope.categories = categoriesSrvc.
	getCategories().
	success(function(data) {
		$scope.categories = data;
	});

}])
.controller('categoryCtrl', ['categoriesSrvc', '$scope', '$http', '$stateParams', function (categoriesSrvc, $scope, $http, $stateParams) {
	
	console.log("category controller"); 
	
	// $http.get('api/categories/' + $stateParams.id + '.json')
	categoriesSrvc.getCategory($stateParams.id)
	.success(function (data) {
		$scope.category = data; 
		console.log(data)
	})
	.error(function (err){
		alert(err)
	})

	// $scope.createCategory = categoriesSrvc.createCategory(); 
		
}])