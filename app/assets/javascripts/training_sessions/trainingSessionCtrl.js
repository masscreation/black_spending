angular.module('trainingProgram')
.controller('trainingSessionsCtrl', [
	'$scope',
	'$stateParams', 
	'Restangular',
	'uiCalendarConfig', 
	function ($scope, $stateParams, Restangular, uiCalendarConfig) {
	
	console.log('trainingSessionsCtlr'); 

	// Just ONE GET to /training_routines/123/training_sessions
	$scope.training_routine = Restangular.one('api/training_routines', $stateParams.id); 

	$scope.training_routine.getList('training_sessions')
	.then( function (training_sessions) {
		// Tag training sessions to a $scope for 
		// inclusion in the view
		console.log('training sessions: ', training_sessions); 
		$scope.training_sessions = training_sessions;

		function chunk(arr, size) {
		  var newArr = [];
		  for (var i=0; i<arr.length; i+=size) {
		    newArr.push(arr.slice(i, i+size));
		  }
		  return newArr;
		}
		console.log("chunked sessions: ", chunk(training_sessions, 7)); 
		$scope.chunkedData = chunk(training_sessions, $scope.training_routine.sessions_per_week)

	});
	 
	 //Create training sessions
	$scope.createTrainingSession = function(training_session) {
		var allRoutines = Restangular.all('api/training_sessions');

		// Set the training session's routine as the current routine in view
		$scope.training_session.training_routine_id = $stateParams.id ;
		
		//Declare variables that represent session order and period
		var sessionOrder = $scope.training_session.order_in_routine;
		var sessionPeriod = $scope.training_session.period_type_id; 

		// Determine what period the session is tagged in 
		// by the session's order in the training routine. 
		if (sessionOrder < 13) {
			sessionPeriod = 1
		} else if (sessionOrder > 12 && sessionOrder < 37) {
			sessionPeriod = 2 
		} else if (sessionOrder > 36 && sessionOrder < 60) {
			sessionPeriod = 3
		} else {
			sessionPeriod = 4 
		}; 
		// POST training_session to training_sessions
		allTrainingSessions.post(training_session); 
		
		// Clear training training_session form 
		$scope.training_session.session_type = ''; 
 		$scope.training_session.description = ''; 
 		$scope.training_session.duration = ''
	}; 


}])
.controller('trainingSessionCtr', ['$scope', 'Restangular', function ($scope, Restangular) {
	
	console.log('trainingSessionCtrl'); 

	


}])