(function() {
'use strict';

    angular
        .module('app-contact')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$firebaseObject','$scope'];
    function ContactController(firebaseObject,$scope) {
        var vm = this;
        vm.contact = {};
        
        var Firebaseref = new Firebase("https://mycvlinkedin.firebaseio.com/").child("contact");
        var obj = firebaseObject(Firebaseref);

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
            //bind data trên firebase nhánh contact vào biến vm.contact
            //<=> thay đổi biến vm.contact thì dữ liệu trên firebase cũng thay đổi
            obj.$bindTo($scope, 'data').then(function () {
                vm.contact = $scope.data;
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