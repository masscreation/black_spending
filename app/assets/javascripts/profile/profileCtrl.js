angular.module('trainingProgram')
.controller('userProfileCtrl', 
	['$scope', 
	 'Auth', 
	 'Restangular', 
	 function ($scope, Auth, Restangular) {

	console.log('User ProfileCtrl'); 

		

	Auth.currentUser().then(function (user){
  		console.log('user is logged in')
	});


}])


