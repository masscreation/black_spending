angular.module('trainingProgram')
.controller('navCtrl', [
'$scope',
'$state',
'Auth', 
'Restangular',  
function ($scope, $state, Auth, Restangular) {

	Auth.currentUser().then(function (user) {
		$scope.user = user
	
		Restangular.one('api/trainers', $scope.user.id).get().then(function (user) {
			console.log("user", user.type); 
			if (user.type === "Trainer") {
				$scope.trainer = trainer
			}
		});

		$scope.trainerSignedIn = function () {
			if (Auth.isAuthenticated && $scope.user === $scope.trainer) {
				return true
			};
		}
		console.log('Trainer signed in?', $scope.trainerSignedIn()); 

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