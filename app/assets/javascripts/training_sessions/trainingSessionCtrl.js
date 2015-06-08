angular.module('trainingProgram')
.controller('trainingSessionCtrl', ['$scope', '$httpProvider', function ($scope, $httpProvider) {
	
	$httpProvider.get('training_sessions')
		.success(function (data) {
			console.log(data); 
			$scope.training_sessions = data; 
		})
		.error(function (data) {
			console.log("error" + data); 
		}); 

		$scope.eventSources = [$scope.training_sessions];
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
		$httpProvider.post('training_sessions', $scope.training_sessions)
		.success(function(data) {

			$scope.training_sessions.push(data); 

		})
		.error(data, function() {
			alert("No training_sessions created"); 
		})
	}; 


}]); 