angular.module('trainingProgram')
.service('exercises', ['$http', '$q', function ($http, $q) {
	console.log('exercises service');

	var deferred = $q.defer(); 
	 
	$http.get('api/exercises').then(function (exercises) {
		console.log('exercise service exercises: ', exercises); 
		deferred.resolve(exercises)
	}); 

	 this.getExercises = function () 
	 {
		return deferred.promise
	 }; 
	
}]); 
		 