angular.module('trainingProgram')
.directive('integer', function () {
	// Parse the exercise form input, category_id and make sure it gets saved as an integer
	return {
		require: 'ngModel', 
		link: function(scope, ele, attr, ctrl) {
			ctrl.$parsers.unshift(function(viewValue) {
				console.log('viewValue is ', + viewValue); 
				return parseInt(viewValue, 10)
			})
		}
	}
}); 