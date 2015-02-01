angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $localstorage) {

	var vapes, flavors;
	
	









 	function getLocalStorage(){
 		vapes = $localstorage.getObject('vapesInfos');
 		return vapes;
 	}

 	function getFlavorsFromLocalStorage(){
 		vapes = $localstorage.getObject('vapesInfos');
 		flavors = vapes.flavors
 		return flavors;
 	}


 	function resetLocalStorage(){
 		$localstorage.setObject('vapesInfos',  {});
 	}

 	function saveVape(vape){
 		if(!flavors) {
 			flavors = [];	
 		}
 		flavors.push(vape);
 		console.log(vape);
 		saveLocalStorage();
 		return flavors;
 	}

 	function saveLocalStorage(){
 		$localstorage.setObject('vapesInfos',  {
			name: "vaperland",
			flavors: flavors
		});
 	}

 	function init(){
		//resetLocalStorage();	
		$scope.vapedata = {};
 		if(getFlavorsFromLocalStorage()){
 			console.log("tengo flavors");
 			console.log(flavors);
 		}else {
 			console.log('no tengo flavors');
 			saveVape({name: 'test'});
 		}

 		$scope.flavors = flavors;
 		 	
 	}

 	 $scope.addVape = function(){
 	 	var data  = angular.copy($scope.vapedata);
	 	saveVape(data);
 		$scope.vapedata = {};
	 }


 	init();

})




.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
