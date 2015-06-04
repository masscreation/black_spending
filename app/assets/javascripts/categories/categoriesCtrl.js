angular.module('trainingProgram').controller('categoriesCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.createExercise = function() {
		$http.post('categories', $scope.categories)
		.success(function(data) {
			$scope.categories = data; 
			$scope.categories.push(data); 

		})
		.error(data, function() {
			alert("No categories created"); 
		})
	}
}])