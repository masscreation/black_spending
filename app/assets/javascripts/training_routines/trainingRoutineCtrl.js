angular.module('trainingProgram')
.controller('trainingRoutinesCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function ($scope, $http, $stateParams, Restangular) { 
	var baseRoutines = Restangular.all('api/training_routines')

	baseRoutines.getList().then(function (routines) {
		$scope.routines = routines
	})

	$scope.createRoutine = function(routine) {
		var allRoutines = Restangular.all('api/training_routines');
		allWorkouts.post(workout)
	}
})
.controller('trainingRoutineCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function ($scope, $http, $stateParams, Restangular) { 

})