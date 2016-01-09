angular.module('trainingProgram')
.controller('athleteProfileCtrl', ['$scope', 'Auth', 'Restangular', function ($scope, Auth, Restangular) {
	console.log('athleteProfileCtrl'); 

	// Grab all levels
	var allLevels = Restangular.all('api/levels'); 
	// ...
	allLevels.getList().then(function (levels) {
		$scope.levels = levels 
	}); 
		

	Auth.currentUser().then(function (user){
		console.log('User type is: ', user.type); 
		if (user.type === "Athlete") {
			$scope.athlete = user
		} else {
			console.log('user either not logged in or is not an athlete')
		}
  		
	});

	Restangular.all('')

	console.log('athlete is', $scope.athlete)
}])
.filter('toFeet', function() {
  return function(input) {
  	if (input) {
  		return ((input/12) - (input % 12)/12) + "Ft. " + ((input % 12)/12)*12 + "in";
  	}
    
  };
})
.filter('addLbs', function () {
	return function(input) {
		if (input) {
			return input + " lbs"
		}
		
	}
})
.controller('trainerProfileCtrl', ['$scope', 'Auth', function ($scope, Auth) {
	
	Auth.currentUser().then(function (user) {
		$scope.trainer = user
	})

}]); 