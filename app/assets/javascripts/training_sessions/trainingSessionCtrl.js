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

	$scope.createTrainingSession = function() {
		$http.post('training_sessions', $scope.training_sessions)
		.success(function(data) {

			$scope.training_sessions.push(data); 

		})
		.error(data, function() {
			alert("No training_sessions created"); 
		})
	}; 


}]); 