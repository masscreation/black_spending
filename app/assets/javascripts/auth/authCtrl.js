angular.module('trainingProgram')
.controller('authCtrl', [
'$scope',
'$state',
'$http',
'Restangular', 
'Auth',
function($scope, $state, $http, Restangular, Auth){


  console.log('user is logged in: ', Auth.isAuthenticated());

  // Set variables for athletes and trainers
  var allAthletes = Restangular.all('api/athletes'); 
  var allTrainers = Restangular.all('api/trainers'); 

  // Register athlete
  $scope.registerAthlete = function(athlete) { 
    $scope.athlete = athlete
    console.log(athlete); 
      Auth.register($scope.athlete).then(function(user) {
        user.type = "Athlete"; 
      allAthletes.post(athlete); 
      // Clear the athlete registration form
      $scope.athlete.email = ''; 
      $scope.athlete.username = ''; 
      $scope.athlete.password = ''; 
      // Go to Login
      $state.go('login')

    }), function (error) {
        //handle registration error
        console.log(error)
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
    $scope.trainer = trainer
    Auth.register($scope.trainer).then(function(user){ 
      user.type = "Trainer"; 
      // POST created trainer to trainers
      allTrainers.post(trainer);
      // Clear the trainer registration form
      $scope.trainer.email = ''; 
      $scope.trainer.username = ''; 
      $scope.trainer.password = ''; 
      // Send authenticated trainer to the Training
      // Go to login
      $state.go('login')

    }).then(function (error) {
      //Log registration error
      console.log(error)
    })
  };

  // Log in trainers
  $scope.loginTrainer = function(trainer) {
    Auth.login(trainer).then(function(){
      $state.go('routines')
    }), function (error) {
      // Handle login errors
      console.log(error)
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