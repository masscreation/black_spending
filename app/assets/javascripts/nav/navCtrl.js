angular.module('trainingProgram')
.controller('navCtrl', [
'$scope',
'$state',
'Auth', 
'Restangular',  
function ($scope, $state, Auth, Restangular) {

	Auth.currentUser().then(function (user) {
		$scope.user = user
	}); 

	$scope.signedIn = Auth.isAuthenticated; 
	console.log("Signed in", $scope.signedIn()); 


  $scope.logout = function () {
    Auth.logout().then(function(data){
      $state.go('login');
    });
  }

  $scope.$on('devise:new-registration', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:login', function (e, user) {
    $scope.user = user;
  });

  $scope.$on('devise:logout', function (e, user){
    $scope.user = {};
  });

}]);