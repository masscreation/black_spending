angular.module('trainingProgram').controller('trainingSessionCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.createExercise = function() {
		$http.post('training_sessions', $scope.training_sessions)
		.success(function(data) {
			$scope.training_sessions = data; 
			$scope.training_sessions.push(data); 

		})
		.error(data, function() {
			alert("No training_sessions created"); 
		})
	}
}])