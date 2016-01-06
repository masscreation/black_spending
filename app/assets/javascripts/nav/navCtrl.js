angular.module('trainingProgram')
.controller('navCtrl', [
'$scope',
'$state',
'Auth',
function ($scope, $state, Auth) {

  $scope.signedIn = Auth.isAuthenticated;

  $scope.logout = function () {
    Auth.logout().then(function(data){
      $state.go('login');
    });
  }

  Auth.currentUser().then(function (user){
    $scope.user = user;
  });

  $scope.$on('devise:new-registration', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:login', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:logout', function (e, user){
    $scope.user = {};
  });
}]);