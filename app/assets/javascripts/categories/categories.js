angular.module('trainingProgram')
.service('categoriesSrvc', ['$http', function ($http) {

	console.log('categories service'); 

	  
	return {
		getCategories: function () {
			var categories = [];  
			return $http.get('api/categories.json');
				// .success(function (data) {
				// 	cb(data);
				// })
				// .error(function (err){
				// 	alert(err)
				// })
				// return categories; 
		},
		getCategory: function(id) {
			return $http.get('api/categories/' + id + '.json');
		}
	}

		// createCategory: function(category) {
		// 	$http.post('api/categories.json', category)
		// 	.success(function (category) {
		// 		categories.push(category); 
		// 	})
		// 	.error(function (err) {
		// 		alert(err); 
		// 	})
		// }, 
		// editCategory: function(category) {

		// }
			

	
}]);