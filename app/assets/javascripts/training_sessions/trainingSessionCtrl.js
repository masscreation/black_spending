angular.module('trainingProgram')
.controller('trainingSessionCtrl', ['$scope', '$httpProvider', function ($scope, $httpProvider) {
	
	$httpProvider.get('training_sessions')
		.success(function (data) {
			console.log(data); 
			$scope.training_sessions = data; 
		})
		.error(function (data) {
			console.log("error" + data); 
		}); 

	$scope.createExercise = function() {
		$httpProvider.post('training_sessions', $scope.training_sessions)
		.success(function(data) {
			$scope.training_sessions = data; 
			$scope.training_sessions.push(data); 

		})
		.error(data, function() {
			alert("No training_sessions created"); 
		})
	}; 


}]); 