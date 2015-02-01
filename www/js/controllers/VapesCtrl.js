angular.module('starter.controllers').controller('VapesCtrl', 
				['$scope', '$timeout',  '$ionicModal', 'VapesService', 
function( $scope,   $timeout,    $ionicModal,   VapesService) {
	'use strict';

var flavors;

 	function init(){


 		//reset!!
 	
 		console.log("init again");

 		// Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/vape-modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });


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

	$scope.createVape = function(){
		$scope.vapedata = {};
		$scope.isNew = true;
		$scope.modal.show();
	}

	$scope.closeModal = function(e){
		$scope.modal.hide();
		e.preventDefault();
	}

	

	$scope.showVape = function(vape){
		$scope.isNew = false;
		$scope.vapedata = vape;
		$scope.modal.show();
	}


 	init();

}]);