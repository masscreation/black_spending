angular.module('trainingProgram')
.controller('categoriesCtrl', [
	'$scope', 
	'$http', 
	'$stateParams', 
	'Restangular', 
	function ($scope, $http, $stateParams, Restangular) {
	
	console.log("categories controller"); 

	// Assign all catgories to a an array, baseCategories
	var baseCategories = Restangular.all('api/categories'); 
	
	// Place scope on categories for rendering in the view
	baseCategories.getList().then(function (categories) {
		$scope.primecategories = [];
		$scope.subcategories = []; 
		categories.forEach(function (category) {

			if (category.ancestry === null) { 
				// primecategory = category; 
				$scope.primecategories.push(category); 
			} else {
				// subcategory = category;
				$scope.subcategories.push(category)
			}
		})
		console.log('primecategories: ', $scope.primecategories);
	 	console.log('subcategories: ', $scope.subcategories);

		$scope.primecategories.forEach(function (primecategory) {
			$scope.primecategory = primecategory; 
			$scope.primecategory.children = [];

			$scope.subcategories.forEach(function (subcategory) {
				subcategory.ancestryArray = subcategory.ancestry.split("/"); 
				console.log('ancestryArray: ', subcategory.name, subcategory.ancestryArray); 
				subcategory.ancestryArray.forEach(function (id) {
					if ($scope.primecategory.id === parseInt(id)) {
						$scope.primecategory.children.push(subcategory)
					}
				})
			}); 
			console.log('children: ', $scope.primecategory.name, $scope.primecategory.children)
		})
	}); 
	
	// Slick carousel
	$scope.slickConfig = {
		enabled: true, 
    	arrows: true, 
    	dots: true, 
    	autoplay: false,
    	draggable: true, 
    	autoplaySpeed: 2000,
    	method: {},
    	event: {
        	beforeChange: function (event, slick, currentSlide, nextSlide) {
        		
        	},
        	afterChange: function (event, slick, currentSlide, nextSlide) {
        
        	}
    	}
	};

	$scope.toggleSlick = function() {
      $scope.slickConfig.enabled = !$scope.slickConfig.enabled; 
      console.log('toggleSlick')
    }; 

    $scope.toggleSlick()
	
}]); 

 