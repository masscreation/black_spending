angular.module('trainingProgram')
.factory('categoriesSrvc', ['$http', function ($http) {

	console.log('post service')
	// $http.get('api/categories.json')
	// 	.success(function (data) {
	// 		console.log(data); 
	// 		$scope.categories = data;
	// 	})
	// 	.error(function (data) {
	// 		console.log("error:" + data); 
	// 	});
	var o =  { 
		categories: []
	}; 

	o.getAll = function() {
    	return $http.get('api/categories.json').success(function(data){
      		angular.copy(data, o.categories);
    	});
  	};	

	o.get = function(id) {
  		return $http.get('api/categories/' + id + '.json').then(function(res){
    		return res.data;
  		}); 
	};

	return o; 


}]);