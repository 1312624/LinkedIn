(function() {
'use strict';

    angular
        .module('app-languages')
        .controller('LanguageController', LanguageController);

    LanguageController.$inject = ['$http'];
    function LanguageController($http) {
        var vm = this;
        vm.languages = [];

        activate();

        ////////////////

        function activate() {
            $http.get('data/profile.json').then(function(response){
                vm.languages = response.data.languages            
            })
        }
    }
})();