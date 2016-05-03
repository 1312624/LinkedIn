(function() {
'use strict';

    angular
        .module('app-contact')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$http','$scope'];
    function ContactController($http,$scope) {
        var vm = this;
        vm.contact = {};
        
        vm.IsHide = [true,true,true,true]; //0:facebook 1:gmail 2:linkedIn 3:ShowSpecificContact
        vm.Hide = Hide;
        vm.ChangeFacebook = ChangeFacebook;
        vm.ChangeGmail = ChangeGmail;
        vm.ChangeLinkedIn = ChangeLinkedIn;
        
        vm.SubmitFacebook = SubmitFacebook;
        vm.SubmitGmail = SubmitGmail;
        vm.SubmitLinkedIn = SubmitLinkedIn;
        
        
        activate();
        
        ////////////////

        function activate() {
            $http.get('data/profile.json').then(function(response) {
                vm.contact = response.data.contact;
            })
            
         }
         function Hide(index){
            vm.IsHide[index] = !vm.IsHide[index];
        }
        
        function ChangeFacebook(){
            return $scope.facebook;
        }
        
        function ChangeGmail(){
            return $scope.gmail;
        }
        
        function ChangeLinkedIn(){
            return $scope.LinkedIn;
        }
        
        function SubmitFacebook(){
            vm.contact.facebook = vm.ChangeFacebook();
            vm.IsHide[0] = !vm.IsHide[0];
        }
        
        function SubmitGmail(){
            vm.contact.gmail = vm.ChangeGmail();
            vm.IsHide[1] = !vm.IsHide[1];
        }
        
        function SubmitLinkedIn(){
            vm.contact.linkedIn = vm.ChangeLinkedIn();
            vm.IsHide[2] = !vm.IsHide[2];
        }
        
    }
})();