angular.module('starter.services', []).factory('VapesService', 
        [  '$localstorage', 'lodash' ,
  function( $localstorage,   lodash ) {
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

  function removeVape(vape){
    if(lodash.indexOf(flavors, vape) >= 0){
      lodash.pull(flavors,vape);
    }
    saveLocalStorage();
    return flavors;
  }

  return {
  	getFlavorsFromLocalStorage: getFlavorsFromLocalStorage,
  	saveVape: saveVape,
    removeVape: removeVape,
  	getLocalStorage: getLocalStorage,
   	resetLocalStorage: resetLocalStorage
  };
}]);