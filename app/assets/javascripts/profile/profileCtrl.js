angular.module('trainingProgram')
.controller('athleteProfileCtrl', ['$scope', 'Auth', function ($scope, Auth) {
	console.log('athleteProfileCtrl'); 
	Auth.currentUser().then(function (user){
  		$scope.user = user;
	});

	console.log('user is', $scope.user)
}])
.controller('trainerProfileCtrl', ['$scope', 'Auth', function ($scope, Auth) {

}])