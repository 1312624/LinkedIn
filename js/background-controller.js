(function() {
'use strict';

    angular
        .module('app-background')
        .controller('BackgroundController', BackgroundController);

    BackgroundController.$inject = ['$http'];
    function BackgroundController($http) {
        var vm = this;
        vm.background = {};

        activate();

        ////////////////

        function activate() {
            $http.get('data/profile.json').then(function(response){
                vm.background = response.data.background            
            })
        }
    }
})();