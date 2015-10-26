angular.module('trainingProgram')
.controller('authCtrl', [
'$scope',
'$state',
'$http',
'Restangular', 
'Auth',
function($scope, $state, $http, Restangular, Auth){

  console.log('current user is:', Auth._currentUser)

  //Log in athletes
	$scope.athleteLogin = function() {
    Auth.login($scope.athlete).then(function(){

      $scope.athlete.email = ''; 
      $scope.ahtlete.password = ''; 

      $state.go('train')
    });
  };
  // Log in trainers
  $scope.trainerLogin = function() {
    Auth.login($scope.trainer).then(function(){
      $state.go('routines');
    });
  };

  var allAthletes = Restangular.all('api/athletes')
  var allTrainers = Restangular.all('api/trainers')

  // Register athletes
  $scope.registerAthlete = function(athlete) {
    $scope.athlete = athlete; 
    Auth.register($scope.athlete).then(function(){
    	allAthletes.post($scope.athlete)
    	
      $scope.athlete.email = ''; 
      $scope.ahtlete.username = ''; 
      $scope.ahtlete.password = ''; 

    	$state.go('profile');
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

      $state.go('routines');
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