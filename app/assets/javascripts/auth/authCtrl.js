angular.module('trainingProgram')
.controller('authCtrl', [
'$scope',
'$state',
'$http',
'Restangular', 
'Auth',
function($scope, $state, $http, Restangular, Auth){

  console.log('current user is:', Auth._currentUser); 

 // Register athletes
  $scope.registerAthlete = function(athlete) { 
    $scope.athlete = athlete
      Auth.register().then(function(athlete) {
      allAthletes.post(athlete); 
      
      $scope.athlete.email = ''; 
      $scope.athlete.username = ''; 
      $scope.athlete.password = ''; 
      $state.go('train')

    }), function (error) {
        //handle registration error
        console.log(error)
      }
  };

  // Register trainers
  $scope.registerTrainer = function(trainer) {
    
    Auth.register().then(function(trainer){
      // POST created trainer to trainers
      allTrainers.post(trainer);
      // Clear the trainer registration form
      $scope.trainer = trainer;
      $scope.trainer.email = ''; 
      $scope.trainer.username = ''; 
      $scope.trainer.password = ''; 
      // Send authenticated trainer to the Training
      // Routines template
      $state.go('routines')

    }).then(function (error) {
      //Log registration error
      console.log(error)
    })
  };

  //Log in athletes
	$scope.loginAthlete = function(athlete) {
    Auth.login().then(function(user){

      $state.go('train')

    }), function(error) {
      //Handle login errors
    }
  };
  // Log in trainers
  $scope.loginTrainer = function(trainer) {
    Auth.login(trainer).then(function(){
      $state.go('routines');
    });
  };

  // Set variables for athletes and trainers
  var allAthletes = Restangular.all('api/athletes'); 
  var allTrainers = Restangular.all('api/trainers'); 

  // Logout users
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