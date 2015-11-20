angular.module('trainingProgram')
.controller('athleteTrainingSessionsCtlr', ['$scope', 'Restangular', function ($scope, Restangular) {
	
	var trainingRoutines = Restangular.all('api/training_routines'); 
	
	//Tag athlete's training sessions to routine using enrollment
	Restangular.all('api/enrollments').forEach(function(enrollment) {
		trainigRoutines.forEach(function (routine) {
			
		})
	})

	Restangular.all('api/athlete_training_sessions').forEach(function(session) {
		$scope.athleteTrainingSessions = [];
	})
		$scope.eventSources = baseTrainingSessions;
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

	$scope.createTrainingSession = function() {
		$http.post('athlete_training_sessions', $scope.athlete_training_sessions)

		.success(function(data) {

			$scope.athlete_training_sessions.push(data); 

		})
		.error(data, function() {
			alert("No training_sessions created"); 
		})
	}; 


}]); 