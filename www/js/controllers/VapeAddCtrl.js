angular.module('starter.controllers').controller('VapeAddCtrl',
			 [ '$scope', '$timeout', '$ionicModal', '$ionicScrollDelegate', '$state' , 'Camera', 'VapesService',	
function( $scope,   $timeout,   $ionicModal,   $ionicScrollDelegate,   $state,    Camera,   VapesService) {
	$scope.vapedata = {};
	$scope.isNew = true;
	
	$scope.addVape = function(){
		
		var data  = angular.copy($scope.vapedata);
		VapesService.saveVape(data);
			$timeout(function(){
			$scope.vapedata = {};
			
		},10);
		$state.go('tab.vapes');
		$ionicScrollDelegate.scrollTop(false);
	
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


}]);