(function () {
'use strict';
	
	angular
	.module( 'black_spending' ) 
	.controller( 'DashboardCtrl', DashboardCtrl ); 

	DashboardCtrl.$inject = [ 'jobs', 'talent' ]; 

	function DashboardCtrl( jobs, talent ) {
		var vm = this; 
		console.log('You are in the ', this);

		vm.jobsList = jobs.jobsList;
		vm.talentList = talent.talentList;

		console.log( 'jobsList: ', vm.jobsList ); 
		console.log( 'talentList: ', vm.talentList );

		vm.tab = 1;
        console.log(' tab is: ', vm.tab )

        vm.setTab = function (tabId) {
            vm.tab = tabId;
            // $('div.ng-hide-add').addClass('animated slideOutLeft'); 
            // $('div.ng-hide-remove').addClass('animated slideInLeft'); 
            console.log('now tab is: ', vm.tab)
        };
        vm.isSet = function (tabId) {
            return vm.tab === tabId
        };

        vm.createJob = function() {

        }

 
	}

})(); 