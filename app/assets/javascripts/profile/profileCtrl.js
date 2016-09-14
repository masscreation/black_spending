(function() {
	'use strict';

	angular.module('skilltapp')
	.controller( 'UserProfileCtrl', UserProfileCtrl) ;  
	
	UserProfileCtrl.$inject = [ 'Auth', 'users' ]; 

	function UserProfileCtrl( Auth, users ) {

		console.log('User ProfileCtrl'); 

	} 

})(); 






