'use strict';
/**
 * @ngdoc function
 * @name exampleAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of skilltap
 */
angular.module('skilltapp')
  .controller('MainCtrl', ['$scope', function ($scope, thingsFactory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
 
	console.log("$scope is", $scope); 
	console.log("awesomeThings are", $scope.awesomeThings);

}]);