angular.module('starter.controllers', [])
.controller('VapesCtrl', ['$scope',  'VapesService',  function($scope, VapesService) {
	'use strict';

var flavors;

 	function init(){
		//resetLocalStorage();	
		$scope.vapedata = {};
		flavors = VapesService.getFlavorsFromLocalStorage();
 		if(flavors){
 			console.log('tengo flavors');
 		}else {
 			console.log('no tengo flavors');
 			VapesService.saveVape({name: 'test'});
 		}

 		$scope.flavors = flavors;
 		 	
 	}

 	 $scope.addVape = function(){
 	 	var data  = angular.copy($scope.vapedata);
	 	VapesService.saveVape(data);
 		$scope.vapedata = {};
	 };


 	init();

}]);