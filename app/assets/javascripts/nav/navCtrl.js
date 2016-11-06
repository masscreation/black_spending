(function() {
  'use strict'; 

  angular.module('black_spending')
  .controller('NavCtrl', NavCtrl ); 

  NavCtrl.$inject = [ '$scope', '$state', 'Auth' ]; 

  function NavCtrl( $scope, $state, Auth ) {
    var vm = this; 

    vm.signedIn = Auth.isAuthenticated; 
    console.log("Signed in", vm.signedIn()); 


    vm.logout = function () {
      Auth.logout().then(function(data){
        $state.go('login');
      });
    }

    $scope.$on('devise:new-registration', function (e, user){
      vm.user = user;
    });

    $scope.$on('devise:login', function (e, user) {
      vm.user = user;
    });

    $scope.$on('devise:logout', function (e, user){
      vm.user = {};
    });

}

})(); 

