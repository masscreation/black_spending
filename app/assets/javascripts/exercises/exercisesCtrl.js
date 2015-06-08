angular.module('trainingProgram')
.controller('exercisesCtrl', ['$scope', '$http', function ($scope, $http) {
	 
	$http.get('api/exercises.json')
		.success(function (data) {
			console.log(data); 
			$scope.exercises = data; 
		})
		.error(function (data) {
			console.log("error:" + data); 
		});

	$scope.createExercise = function() {
		$http.post('api/exercises.json', $scope.exercises)
		.success(function(data) {
			$scope.exercises = data; 
			$scope.exercises.push(data); 

		})
		.error(data, function() {
			alert("No exercises created"); 
		})
	}
}])