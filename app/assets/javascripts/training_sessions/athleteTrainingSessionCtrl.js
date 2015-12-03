angular.module('trainingProgram')
.controller('athleteTrainingSessionsCtlr', ['$scope', 'Restangular', function ($scope, Restangular) {
	
	var trainingRoutines = Restangular.all('api/training_routines'); 
	
	//Tag athlete's training sessions to routine using enrollment
	Restangular.all('api/enrollments').forEach(function(enrollment) {
		trainigRoutines.forEach(function (routine) {
			
		})
	})

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
		
}]); 