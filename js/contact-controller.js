(function() {
'use strict';

    angular
        .module('app-contact')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$http'];
    function ContactController($http) {
        var vm = this;
        vm.contact = {};
        
        vm.IsHide = true;
        vm.Hide = hide;
        
        activate();
        
        ////////////////

        function activate() {
            $http.get('data/profile.json').then(function(response) {
                vm.contact = response.data.contact;
            })
            
         }
         function hide() {
             vm.IsHide = !vm.IsHide;
         } 
    }
})();