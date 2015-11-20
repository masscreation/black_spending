angular.module('trainingProgram')
.controller('exercisesCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
	 
	var baseExercises = Restangular.all('api/exercises'); 
	console.log(baseExercises)
	
	// Place scope on exercises for rendering in the view
	baseExercises.getList().then(function (exercises) {
		$scope.exercises = exercises; 
	});
	
}])