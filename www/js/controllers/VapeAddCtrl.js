angular.module('starter.controllers').controller('VapeAddCtrl',
			 [ '$scope', '$timeout', '$ionicModal', '$ionicScrollDelegate', '$state' , 'Camera', 'VapesService',	
function( $scope,   $timeout,   $ionicModal,   $ionicScrollDelegate,   $state,    Camera,   VapesService) {
	
	$scope.vapedata = {};
	$scope.isNew = true;
	
	$scope.addVape = function(){
		
		var data  = angular.copy($scope.vapedata);
		VapesService.saveVape(data);
			
		//reset after timeout, cleanup	
		$timeout(reset,10);
		//redirect to vapes
		$state.go('tab.vapes');
		//reset scroll
		$ionicScrollDelegate.scrollTop(false);
	};

	$scope.getPhoto = function(event) {
		//@TODO add inline loader?
		event.preventDefault();
		//get camera
		Camera.getPicture().then(function(imageURI) {
			$scope.vapedata.image = imageURI;
		}, getCameraError, 
		{
			quality: 75,
			targetWidth: 320,
			targetHeight: 320,
			saveToPhotoAlbum: false
		});
	}

	/**
	 * Reset tab state
	 * @return {[type]} [description]
	 */
	function reset(){
		$scope.vapedata = {};
		$scope.isNew = true;
	}

	/**
	 * Handle camera error
	 * @param  {Object} error the error 
	 * error {status,code}
	 */
	function getCameraError(error){
		if(error && error.status === 0){
			console.log('loading defaut photo');
			$scope.vapedata.image = 'img/e-liquid.jpg';
		}else{
			console.log('unknown error, retry?');
			//TODO handle error, retry button, default img.
		}
	}

	//reset on startup
	reset();

}]);