(function() {
'use strict';

    angular
        .module('app-upload-firebase')
        .controller('FirebaseController', FirebaseController);

    FirebaseController.$inject = ['$http','$scope','$firebaseObject'];
    function FirebaseController($http,$scope,firebaseObj) {
        var vm = this;
        
        vm.data = {};
        activate();

        ////////////////

        function activate() {
            //Load data from local to firebase (Init firebase)
            /*$http.get('data/profile.json').then(function(response){
                vm.data = response.data;
                
                 var Firebaseref = new Firebase("https://mycvlinkedin.firebaseio.com/");
                 var obj = firebaseObj(Firebaseref); 
                        
                 obj.$bindTo($scope, 'data').then(function(){
                        $scope.data = vm.data;
                    })
                })*/
            }
        }
})();