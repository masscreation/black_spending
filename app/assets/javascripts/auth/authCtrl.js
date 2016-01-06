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
      Auth.register($scope.athlete).then(function(athlete) {
      allAthletes.post(athlete); 
      // Clear the athlete registration form
      $scope.athlete.email = ''; 
      $scope.athlete.username = ''; 
      $scope.athlete.password = ''; 
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
    
    Auth.register().then(function(trainer){
      // POST created trainer to trainers
      allTrainers.post(trainer);
      // Clear the trainer registration form
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

  // Log in trainers
  $scope.loginTrainer = function(trainer) {
    Auth.login(trainer).then(function(){
      $state.go('routines')
    }), function (error) {
      // Handle login errors
      console.log(error)
    }
  };

  // Logout users
  // $scope.logout = function() {

  //   var config = {
  //     headers: {
  //       'X-HTTP-Method-Override': 'DELETE'
  //     }
  //   };
  //   Auth.logout(config).then(function(oldUser) {
  //             // alert(oldUser.name + "you're signed out now.");
  //         }, function(error) {
  //             // An error occurred logging out.
  //         })
  // }; 
   
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