angular.module('trainingProgram')
.controller('authCtrl', [
'$scope',
'$state',
'$http',
'Restangular', 
'Auth',
function($scope, $state, $http, Restangular, Auth){


  console.log('user is logged in: ', Auth.isAuthenticated());


  // Register athlete
  $scope.registerAthlete = function(athlete) { 
    $scope.athlete = athlete
    console.log('Registering athlete:', athlete); 
      Auth.register($scope.athlete).then(function(user) {
        user.type = "Athlete"; 
      allAthletes.post(athlete); 
      // Go to Login
      $state.go('login')

    }), function (error) {
        //handle registration error
        console.log("Athlete registration error:", error)
      }
  };

    //Log in athletes
  $scope.loginAthlete = function(athlete) { 
    Auth.login(athlete).then(function(athlete){
      $state.go('train')
    }), function(error) {
      //Handle login errors
      console.log('error: ', error)
    }
  };

  // Register trainer
  $scope.registerTrainer = function(trainer) {
    Auth.register(trainer).then(function(trainer){ 
      trainer.type = "Trainer"; 
      // POST created trainer to trainers
      allTrainers.post(trainer);
      // Send registered trainer to 'login'
      $state.go('login')

    }).then(function (error) {
      //Log registration error
      console.log("Trainer registration error:", error)
    })
  };

  // Log in trainers
  $scope.loginTrainer = function(trainer) {
    Auth.login(trainer).then(function(trainer){
      $state.go('routines')
    }), function (error) {
      if (error) {
        // Handle login errors
        console.log("Login error:", error); 
        $scope.error_message = error; 
      }
      return $scope.error_message
      
    }
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