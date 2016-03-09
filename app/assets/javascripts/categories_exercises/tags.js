angular.module('trainingProgram')
.service('tags', ['$http', '$q', function ($http, $q) {
	console.log('tags service');

	var tagNames = [];
	$http.get('api/tags').then(function (tags) {
		var tags = tags.data;
		tags.forEach(function (tag) {
			tagNames.push(tag.name)
		});
		console.log('tagNames: ', tagNames)
	}); 
	
	this.load = function() {
    	var deferred = $q.defer();
    	deferred.resolve(tags);
    	return deferred.promise;
  	};

	 console.log('loaded tags: ', this.load()); 
}]); 
		