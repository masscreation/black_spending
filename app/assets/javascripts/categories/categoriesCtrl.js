angular.module('trainingProgram')
.controller('categoriesCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
	console.log("categories controller")
	$scope.categories = []; 
	$http.get('api/categories.json')
		.success(function (data) {
			console.log(data); 
			$scope.categories = data;
			link: $scope.link;  
		})
		.error(function (data) {
			console.log("error:" + data); 
		}); 

		$scope.category = $stateParams.category;

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