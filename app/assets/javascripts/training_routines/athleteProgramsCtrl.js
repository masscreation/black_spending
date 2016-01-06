angular.module('trainingProgram')
.controller('athleteProgramsCtrl', [
	'$scope', 
	'$http', 
	'$stateParams', 
	'Restangular', 
	'Auth', 
	function ($scope, $http, $stateParams, Restangular, Auth) { 
	
	//Grab all training routines
			var baseRoutines = Restangular.all('api/training_routines');
			baseRoutines.getList().then(function (routines) {
				$scope.allPrograms = routines
			});
debugger; 
	if (Auth.isAuthenticated()) {
		debugger;
	// Authenticate current athlete
		Auth.currentUser().then(function (athlete) {
			$scope.athlete = athlete

			// Grab athlete's training routines 
			$scope.athletePrograms = []; 
			$scope.athlete.getList('enrollments').then(function (enrollments) {
				enrollments.forEach(function (enrollment) {
					$scope.allRoutines.forEach(function (routine) {
						if (enrollment.training_routine_id === routine.id) {
							$scope.athletePrograms.push(routine)
						}
					})
				})
			})
		});   
	} else {
		debugger;
		$state.go('login')
	}
}])
.controller('athleteProgramCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function ($scope, $http, $stateParams, Restangular) { 

	console.log('programCtrl')

	Restangular.one('api/training_routines', $stateParams.id).get()
	.then(function (program) {
		$scope.program = program; 
		console.log('Training Routine:', routine.name)
	}); 

	//YouTube player variables
	$scope.playerVars = {
		controls: 0,
		rel: 0
	};

	$scope.Enroll = function(enrollment) {
		if (Auth.isAuthenticated) {
			var allEnrollments = Restangular.all('/api/athletes/:athlete_id/enrollments');
			console.log('post to enrollments')
			//Associate enrollment with current athlete
			$scope.enrollment.athlete_id = $scope.athlete.id

			// Associate enrollment with current training routine
			$scope.enrollment.training_routine_id = $scope.program.id

			// Post enrollment to athlete's enrollments
			allEnrollments.post(enrollment);
		}
			

	};

}]); 