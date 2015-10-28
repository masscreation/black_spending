angular.module('trainingProgram')
.controller('trainingSessionsCtlr', ['$scope', 'Restangular', function ($scope, Restangular) {
	
	
	var baseTrainingSessions = Restangular.all('api/training_sessions'); 
	
	console.log(baseTrainingSessions);

	$scope.training_sessions = baseTrainingSessions; 

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

	$scope.createTrainingSession = function(training_session) {
		var allRoutines = Restangular.all('api/training_sessions');
		$scope.training_session.training_routine_id = $stateParams.id ; 
		// post training_session to training_sessions
		allTrainingSessions.post(training_session); 
		
		// Clear training training_session form 
		$scope.training_session.session_type = ''; 
 		$scope.training_session.focus = ''; 
 		$scope.training_session.duration = ''
 
	}; 


}]); 