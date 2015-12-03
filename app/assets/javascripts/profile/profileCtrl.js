angular.module('trainingProgram')
.controller('athleteProfileCtrl', ['$scope', 'Auth', 'Restangular', function ($scope, Auth, Restangular) {
	console.log('athleteProfileCtrl'); 
	Auth.currentUser().then(function (athlete){
  		$scope.athlete = athlete;
	});

	Restangular.all('')

	console.log('athlete is', $scope.athlete)
}])
.controller('trainerProfileCtrl', ['$scope', 'Auth', function ($scope, Auth) {

}])