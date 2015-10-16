angular.module('trainingProgram')
.service('exercisesSrvc', ['$http', 'Restangular', function ($http, Restangular) {

	console.log('exercises service'); 
	 var baseExercises = Restangular.all('api/exercises'); 
		console.log(baseExercises)

}]); 
		 