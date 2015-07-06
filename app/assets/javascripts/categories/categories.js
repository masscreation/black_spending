angular.module('trainingProgram')
.service('categoriesSrvc', ['$http', function ($http) {

	console.log('categories service'); 
	 this.getCategories = function () {
	 var categories = $http.get('api/categories.json')
		.then(function (categories) {
			return categories.data; 
		}); 
		


		return categories; 
	 }; 
		 



	// var o =  { 
	// 	categories: []
	// }; 

	// o.getAll = function() {
 //    	return $http.get('api/categories.json').success(function(data){
 //      		angular.copy(data, o.categories);
 //    	});
 //  	};	

	// o.get = function(id) {
 //  		return $http.get('api/categories/' + id + '.json').then(function(res){
 //    		return res.data;
 //  		}); 
	// };

	// return o; 


}]);