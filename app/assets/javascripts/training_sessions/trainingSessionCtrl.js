angular.module('trainingProgram')
.controller('trainingSessionsCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
	
	console.log('trainingSessionsCtlr'); 

	// Just ONE GET to /training_routines/123/training_sessions
	Restangular.one('api/training_routines', $stateParams.id).getList('training_sessions')
	.then( function (training_sessions) {
		// Tag training sessions to a $scope for 
		// inclusion in the view
		$scope.training_sessions = baseTrainingSessions;
	});
	 
	 //Create training sessions
	$scope.createTrainingSession = function(training_session) {
		var allRoutines = Restangular.all('api/training_sessions');
		$scope.training_session.training_routine_id = $stateParams.id ;
		
		//Declare variables that represent session order and period
		var sessionOrder = $scope.training_session.order_in_routine
		var sessionPeriod = $scope.training_sessios.period_type_id 

		// Determine what period the session is tagged in 
		// by the sessions order in the training routine. 
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
 		$scope.training_session.focus = ''; 
 		$scope.training_session.duration = ''
 
	}; 


}])
.controller('trainingSessionCtr', ['$scope', 'Restangular', function ($scope, Restangular) {
	
	console.log('trainingSessionCtrl'); 

	


}])