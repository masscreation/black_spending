angular.module('trainingProgram')
.controller('categoriesCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function ($scope, $http, $stateParams, Restangular) {
	
	console.log("categories controller"); 

	var baseCategories = Restangular.all('api/categories'); 
	console.log(baseCategories)
	
	baseCategories.getList().then(function (categories) {
		$scope.categories = categories; 
	})
}])
.controller('categoryCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function ($scope, $http, $stateParams, Restangular) {
	
	console.log("category controller"); 
	console.log("State Params ID:", $stateParams.id); 
	
	// $http.get('api/categories/' + $stateParams.id + '.json')
	Restangular.one('api/categories', $stateParams.id).get()
	.then(function (category) {
		$scope.category = category; 
		console.log(category);


		$scope.category.exercises = []; 
		
		$scope.category.getList('exercises').then(function (exercises) {
			exercises.forEach(function (exercise) {
				if (category.id === exercise.category_id) {
					$scope.category.exercises.push(exercise);
					console.log($scope.category.exercises); 
				}
			})
			
		})
		
	}); 

		
	$scope.createExercise = function(exercise) {
		var allExercises = Restangular.all('api/exercises');
		console.log('createExercise'); 
		$scope.exercise.category_id = $stateParams.id; 
	 	allExercises.post(exercise).then(function () {
	 		$scope.exercise.name = ''; 
	 		$scope.exercise.description = ''; 
	 		$scope.exercise.instructions = ''
	 	})
	}; 
		
		
}])
.directive('integer', function () {
	return {
		require: 'ngModel', 
		link: function(scope, ele, attr, ctrl) {
			ctrl.$parsers.unshift(function(viewValue) {
				console.log('viewValue is ', + viewValue); 
				return parseInt(viewValue, 10)
			})
		}
	}
})
.directive( 'editInPlace', function() {
  return {
    restrict: 'E',
    scope: { value: '=' },
    template: '<span ng-click="edit()" ng-bind="value"></span><input ng-model="value"></input>',
    link: function ( $scope, element, attrs ) {
      // Let's get a reference to the input element, as we'll want to reference it.
      var inputElement = angular.element( element.children()[1] );
      
      // This directive should have a set class so we can style it.
      element.addClass( 'edit-in-place' );
      
      // Initially, we're not editing.
      $scope.editing = false;
      
      // ng-click handler to activate edit-in-place
      $scope.edit = function () {
        $scope.editing = true;
        
        // We control display through a class on the directive itself. See the CSS.
        element.addClass( 'active' );
        
        // And we must focus the element. 
        // `angular.element()` provides a chainable array, like jQuery so to access a native DOM function, 
        // we have to reference the first element in the array.
        inputElement[0].focus();
      };
      
      // When we leave the input, we're done editing.
      inputElement.prop( 'onblur', function() {
        $scope.editing = false;
        element.removeClass( 'active' );
      });
    }
  };
});
 