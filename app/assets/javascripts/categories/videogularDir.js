angular.module('trainingProgram') 
.directive('videoDirective', function() {
	console.log('In the video directive'); 
	return {
		templateUrl: 'videogular-directive.html', 
		replace: true
	} 
}); 