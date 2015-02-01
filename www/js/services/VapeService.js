angular.module('starter.services', [])

.factory('VapesService', function($localstorage) {
	var vapes,flavors;

	function getLocalStorage(){
 		vapes = $localstorage.getObject('vapesInfos');
 		return vapes;
 	}

 	function getFlavorsFromLocalStorage(){
 		vapes = $localstorage.getObject('vapesInfos');
 		flavors = vapes.flavors;
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
			name: 'vaperland',
			flavors: flavors
		});
 	}

  return {
  	getFlavorsFromLocalStorage: getFlavorsFromLocalStorage,
  	saveVape: saveVape,

  	getLocalStorage: getLocalStorage,
  	saveLocalStorage: saveLocalStorage,
   	resetLocalStorage: resetLocalStorage
  };
});