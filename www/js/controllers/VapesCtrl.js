angular.module('starter.controllers', [])
.controller('VapesCtrl', ['$scope', '$ionicModal', 'VapesService', 'Camera' , function($scope, $ionicModal, VapesService, Camera) {
	'use strict';

var flavors;

 	function init(){


 		

 		// Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/add-vape.html', {
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

	$scope.addVape = function(){
		
		var data  = angular.copy($scope.vapedata);
		VapesService.saveVape(data);
		$scope.vapedata = {};
		console.log("uhggg");
		$scope.modal.hide();
	};

	$scope.getPhoto = function(event) {
		console.log('Getting camera');
		event.preventDefault();
		Camera.getPicture().then(function(imageURI) {
			console.log('sasassa');
			console.log(imageURI);
			$scope.vapedata.image = imageURI;
		}, function(error) {
			console.log(error);
			if(error && error.status === 0){
				console.log(error.message);
				console.log('loading defaut photo');
				$scope.vapedata.image = 'img/e-liquid.jpg';
			}
			
		} 
		, {
			quality: 75,
			targetWidth: 320,
			targetHeight: 320,
			saveToPhotoAlbum: false
		});
	}

	$scope.showVape = function(vape){
		$scope.isNew = false;
		$scope.vapedata = vape;
		$scope.modal.show();
	}


 	init();

}]);