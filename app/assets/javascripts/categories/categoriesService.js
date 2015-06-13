angular.module('trainingProgram')
.factory('categories', ['$http', function ($http) {

	$http.get('api/categories.json')
		.success(function (data) {
			console.log(data); 
			$scope.categories = data;
		})
		.error(function (data) {
			console.log("error:" + data); 
		}); 
}])