angular.module('trainingProgram')
.service('exercises', ['$http', 'Restangular', function ($http, Restangular) {

	console.log('exercises service'); 
	 var baseExercises = Restangular.all('api/exercises'); 
		console.log(baseExercises)

}]); 
		 