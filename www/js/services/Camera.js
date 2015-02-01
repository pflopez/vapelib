angular.module('starter.services')
.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();
      if(navigator && navigator.camera && navigator.camera.getPicture){
        console.log("its going on");
        navigator.camera.getPicture(function(result) {
          // Do any magic you need
          q.resolve(result);
        }, function(err) {
          q.reject(err);
        }, options);  
      }else{
        q.reject({status: 0, message: 'no camera'});
      }
      

      return q.promise;
    }
  }
}]);