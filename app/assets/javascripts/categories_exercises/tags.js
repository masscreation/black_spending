angular.module('trainingProgram')
.service('tags', ['$http', '$q', function ($http, $q) {
	console.log('tags service');

	var getTags = function () {
		$http.get('api/tags').then(function (tags) {
			var tags = tags.data; 
			console.log('tags: ', tags); 
			return tags
		})
	}
	
	this.load = function() {
    	var deferred = $q.defer();
    	deferred.resolve(getTags());
    	return deferred.promise
  	};

	 console.log('loaded tags: ', this.load());  
}]); 
		