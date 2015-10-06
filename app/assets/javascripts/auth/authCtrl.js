angular.module('trainingProgram')
.controller('authCtrl', [
'$scope',
'$state',
'$http',
'Auth',
function($scope, $state, $http, Auth){

  //Log in athletes
	$scope.athleteLogin = function() {
    Auth.login($scope.athlete).then(function(){
      $state.go('train');
    });
  };
  // Log in trainers
  $scope.trainerLogin = function() {
    Auth.login($scope.trainer).then(function(){
      $state.go('dashboard');
    });
  };

  // Register athletes
  $scope.registerAthlete = function(athlete) {
    $scope.athlete = athlete; 
    Auth.register($scope.athlete).then(function(){
    	$http.post('api/athletes', $scope.athletes)
    	.success(function (data) {
    		$scope.athletes.push(data); 
    	}); 

    	$state.go('home');
    });
  };

    // Register trainers
  $scope.registerTrainer = function(trainer) {
    $scope.user = trainer; 
    Auth.register($scope.user).then(function(){
      $http.post('api/trainers', $scope.trainers)
      .success(function (data) {
        $scope.trainers.push(data); 
      }); 

      $state.go('program-builder');
    });
  };

        $scope.tab = 1;
        console.log('tab is: ',$scope.tab)

        $scope.setTab = function (tabId) {
            $scope.tab = tabId;
            console.log('now tab is: ', $scope.tab)
        };

        $scope.isSet = function (tabId) {
            return $scope.tab === tabId
        };

}]);