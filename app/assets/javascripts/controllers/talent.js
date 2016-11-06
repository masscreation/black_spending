(function() {
	'use strict';

angular
	.module( 'black_spending' )
	.factory( 'talent', talent );

	function talent() {
			
		var talentFactory = {}; 

		talentFactory.talentList = [
			{ 	id: 1, 
				firstname: "Lakeith", 
				lastname: "Taylor",   
				title: "Senior Strategist", 
				location: "Atlanta, GA",      
				clients: [ 'Nike', 'Beats By Dre', 'Home Depot' ],
				skills: { 	expert: [ 'Graphic Design', 'Marketing Strategy', 'Brand Identity'], 
							skilled: [ 'Market Research', 'Content Writing' ], 
							emerging: [ 'Marketing Automation', 'Digital Ads'] 
						},
				must_have: [ 'Work Remotely', 'Part-time Projects', '4 - 12 Minimum Duration', 'Post-revenue Company'], 
				wants_to_have: [ 'Industry: Tech Hardware', 'Equity Compensation', 'Location: ATL, NYC', 'Market: Youth, Millenial' ], 
				will_not_accept: [ 'Pre-revenue Companies', 'Industry: Financial Services', '> 12-Week Duration', 'Implemenation Projects' ], 
				tagline: "Some tagline",
				professional_goal: "Work on innovative projects with passionate entrepreneurs across the country.", 
				achieved: "Designed $2M rebranding campaign for Nike Basketball launch. Planned and executed the launch of MetLife stadium in New York. Increased sales by 20% for Home Depot new product line.",
				beyond_resume: "As a kid, I wanted to be an Astronaut or Firefighter. I realized I wouldn't be a firefighter or an astronaut when I discovered my artistic side and thought, 'This is way better!'" 
			}, 
			{ 	id: 2, 
				firstname: "Thameka", 
				lastname: "Thompson", 
				title: "Project Manager",   
				location: "New York, NY",      
				clients: [ 'Sheishido', 'MongoDB' ],     
				tagline: "Some tagline", 
				beyond_resume: "" 
			},
			{ id: 3, 
				firstname: "Melissa", 
				lastname: "McVicker", 
				title: "Executive Coach",   
				location: "Los Angeles, CA",  
				clients: [ "Bay Area Women's Network" ], 
				tagline: "Some tagline", 
				beyond_resume: "" 
			}
		];	

		return talentFactory; 
	}

})(); 