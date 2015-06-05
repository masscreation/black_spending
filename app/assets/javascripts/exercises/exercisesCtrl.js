angular.module('trainingProgram')
.controller('exercisesCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.createExercise = function() {
		
		console.log("exercises controller")
		$scope.exercises = []; 
		$http.get('exercises.json')
		.success(function (data) {
			console.log(data); 
			$scope.exercises = data; 
		})
		.error(function (data) {
			console.log("error:" + data); 
		});

		$http.post('exercises.json', $scope.exercises)
		.success(function(data) {
			$scope.exercises = data; 
			$scope.exercises.push(data); 

		})
		.error(data, function() {
			alert("No exercises created"); 
		})
	}
}])