(function() {
'use strict';

    angular
        .module('app-profile')
        .controller('ProfileController',ProfileController);

    ProfileController.$inject = ['$http'];
    function ProfileController($http) {
        var vm = this;
        
        vm.profile = {};
        
        activate();

        ////////////////    

        function activate() {
            $http.get('data/profile.json').then(function(response){
                vm.profile = response.data.info;
            })
        }
    }
})();