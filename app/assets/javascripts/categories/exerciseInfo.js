angular.module('trainingProgram') 
.directive('exerciseInfo', function() {
	console.log('Exercise info directive'); 
	return {
		templateUrl: 'exercise.html', 
		replace: true
	} 
}); 