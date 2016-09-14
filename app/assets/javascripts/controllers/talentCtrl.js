(function() {
'use strict';

angular
	.module( 'skilltapp' )
  	.controller( 'TalentCtrl', TalentCtrl ); 
 
	TalentCtrl.$inject = [ 'talent', '$stateParams' ]; 

	function TalentCtrl( talent, $stateParams ) {
		var vm = this;
		console.log('$stateParams.id:', $stateParams.id);

		vm.talentList = talent.talentList;

		console.log(vm.talentList) 
		
		vm.talentList.forEach(function (person) {

			if ( person.id == $stateParams.id ) {
				vm.person = person; 
				console.log('vm.person:', vm.person)
			}
		})

		// vm.tab = 2;
  //       console.log(' tab is: ', vm.tab )

  //       vm.setTab = function (tabId) {
  //           vm.tab = tabId;
  //           console.log('now tab is: ', vm.tab)
  //       };
  //       vm.isSet = function (tabId) {
  //           return vm.tab === tabId
  //       };
	}

})(); 