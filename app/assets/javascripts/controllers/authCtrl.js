(function() {
	'use strict';

angular.module( 'skilltapp' )
.controller( 'AuthCtrl', AuthCtrl ); 
 
	AuthCtrl.$inject = [ 'Auth', '$state' ]; 

	function AuthCtrl( Auth, $state ) {

		  console.log('user is logged in: ', Auth.isAuthenticated());

	    //Log in user
	    $scope.login = function(user) { 
	    	Auth.login(user).then(function(user){
	     	// handle login
	    	}), function(error) {
	        //Handle login errors
	      		console.log('error: ', error)
	    	}
	  	};

		// Register user
		$scope.register = function(user) {
		    Auth.register(user).then(function(user){ 
		      	// POST created trainer to trainers
		      	users.post(user);
		      	// Send registered trainer to 'login'
		      	$state.go('login')

		    }).then(function (error) {
		      	//Log registration error
		      	console.log("User registration error:", error)
		    })
		};

		$scope.tab = 1;

        console.log('tab is: ',$scope.tab)

        $scope.setTab = function (tabId) {
            $scope.tab = tabId;
            // console.log('now tab is: ', $scope.tab)
        };

        $scope.isSet = function (tabId) {
            return $scope.tab === tabId
        };
		
	}

})();