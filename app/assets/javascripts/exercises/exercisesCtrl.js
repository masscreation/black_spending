angular.module('trainingProgram').controller('exercisesCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.createExercise = function() {
		$http.post('exercises', $scope.exercises)
		.success(function(data) {
			$scope.exercises = data; 
			$scope.exercises.push(data); 

		})
		.error(data, function() {
			alert("No exercises created"); 
		})
	}
}])