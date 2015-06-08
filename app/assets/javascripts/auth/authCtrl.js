angular.module('trainingProgram')
.controller('AuthCtrl', [
'$scope',
'$state',
'$http',
'Auth',
function($scope, $state, $http, Auth){

	$scope.login = function() {
    Auth.login($scope.user).then(function(){
      $state.go('home');
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
    	$http.post('users.json', $scope.user)
    	.success(function (data) {
    		$scope.users.push(data); 
    	}); 

    	$state.go('home');
    });
  };

}]);