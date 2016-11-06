(function() {
	'use strict';

	angular.module('black_spending')
	.controller( 'UserProfileCtrl', UserProfileCtrl) ;

	UserProfileCtrl.$inject = [ 'Auth', 'users' ];

	function UserProfileCtrl( Auth, users ) {

		console.log( 'User ProfileCtrl' ); 

	}

})();
