(function() {
	'use strict';

	angular
	.module( 'skilltapp' )
	.factory( 'jobs', jobs ); 

	function jobs() {

		var jobsFactory = {}; 

		jobsFactory.jobsList = [
			{ 	id: 1 , 
				company: "ABC Co.",  
				company_description: "We make customers happy", 
				title: "Brand Strategist", 
				description: "Make brands pop", 
				deliverables: "Increase brand recognition by x%", 
				budget: 80000
			}, 
			{ 	id: 2,  
				company: "XYZ Inc.", 
				company_description: "We broadcast great content", 
				title: "Content Manager", 
				description: "Manage content for greatest impact", 
				deliverables: "Increase consumption rate by x%", 
				budget: 100000
			},
			{ 	id: 3,  
				company: "Service Inc.",         
				company_description: "We", 
				title: "Some Expert", 
				description: "Do expert stuff", 
				deliverables: "Increase some measurable by x%", 
				budget: 120000
			}
		]; 

		return jobsFactory; 
	}
})(); 