angular.module('trainingProgram')
.service('exercisesSrvc', ['$http', function ($http) {

	console.log('exercises service'); 
	 this.getexercises = function () {
		return $http.get('api/exercises.json')
		.then(function (exercises) {
			return exercises.data; 
		}); 
	}; 
}]); 
		 