angular.module('trainingProgram')
.controller('authCtrl', [
'$scope',
'$state',
'$http',
'Restangular', 
'Auth',
function($scope, $state, $http, Restangular, Auth){


  console.log('current user is:', Auth._currentUser); 

  //Log in athletes
	$scope.loginAthlete = function() {
    Auth.login($scope.athlete).then(function(){

      $state.go('train')
    });
  };
  // Log in trainers
  $scope.loginTrainer = function() {
    Auth.login($scope.trainer).then(function(){
      $state.go('routines');
    });
  };

  var allAthletes = Restangular.all('api/athletes'); 
  var allTrainers = Restangular.all('api/trainers'); 

  // Register athletes
  $scope.registerAthlete = function(athlete) {
    $scope.athlete = athlete; 
      Auth.register($scope.athlete).then(function(){
    	allAthletes.post($scope.athlete); 
    	
      $scope.athlete.email = ''; 
      $scope.athlete.username = ''; 
      $scope.athlete.password = ''; 

    	$state.go('profile')
    });
  };

    // Register trainers
  $scope.registerTrainer = function(trainer) {
    $scope.trainer = trainer; 
    Auth.register($scope.trainer).then(function(){
      allTrainers.post($scope.trainer); 
      
      $scope.trainer.email = ''; 
      $scope.trainer.username = ''; 
      $scope.trainer.password = ''; 


      $state.go('routines');
    });
  };

  $scope.logout = function() {

    var config = {
      headers: {
        'X-HTTP-Method-Override': 'DELETE'
      }
    };
    Auth.logout(config).then(function(oldUser) {
              // alert(oldUser.name + "you're signed out now.");
          }, function(error) {
              // An error occurred logging out.
          })
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