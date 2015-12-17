angular.module('trainingProgram')
.controller('athleteTrainingSessions', 
	['$scope', 
	'Restangular', 
	'Auth',
	function ($scope, Restangular, Auth) {
	
	// Authenticate and grab current athlete
	Auth.currentUser().then(function (user) {

		if (user.type === "Athlete") {
			$scope.currentAthlete = user
		}
	}, function (error) {
		console.log(error)
	});

	// Get current athlete's training sessions for the current program
	$scope.currentAthlete.getList('athlete_training_sessions').then(function (sessions) {

		$scope.athlete_sessions = sessions
	});  

	//Tag athlete's training sessions to routine using enrollment
	Restangular.all('api/enrollments').forEach(function(enrollment) {
		trainingRoutines.forEach(function (routine) {
			if (enrollment.routine_id === routine.id) {

			}
		})
	}) 
		
	//Athlete training sessions in calendar view  
	$scope.athleteTrainingSessions = [];
	Restangular.all('api/athlete_training_sessions').forEach(function(session) {
		
		if (session.athlete_id === currentUser().id) {
			$scope.athleteTrainingSessions.push(session)
		}

		$scope.eventSources = $scope.athleteTrainingSessions;
		/* config object */
	    $scope.uiConfig = {
	      calendar:{
	        height: 450,
	        editable: true,
	        header:{
	          left: 'month basicWeek basicDay agendaWeek agendaDay',
	          center: 'title',
	          right: 'today prev,next'
	        },
	        dayClick: $scope.alertEventOnClick,
	        eventDrop: $scope.alertOnDrop,
	        eventResize: $scope.alertOnResize
	      }
	    };

	})
		
}])
.controller('athleteTrainingSession', 
	['$scope', 'Restangular', function ($scope, Restangular) {



}]); 