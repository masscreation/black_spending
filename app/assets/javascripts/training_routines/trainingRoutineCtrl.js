angular.module('trainingProgram')
.controller('trainingRoutinesCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function ($scope, $http, $stateParams, Restangular) { 
	var baseRegimens = Restangular.all('api/training_regimens') 
})
.controller('trainingRoutineCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function ($scope, $http, $stateParams, Restangular) { 

})