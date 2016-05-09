(function() {
'use strict';

    angular
        .module('app-profile')
        .controller('ProfileController',ProfileController);

    ProfileController.$inject = ['$firebaseObject','$scope'];   
    function ProfileController(firebaseObj,$scope) {
        window.SC = $scope;
        var vm = this;
        
        var Firebaseref = new Firebase("https://mycvlinkedin.firebaseio.com/").child("info");
        var obj = firebaseObj(Firebaseref);
        
        vm.profile = {};
        
        vm.IsHide = [true,true,true,true,true,true];
        vm.Hide = Hide;
        vm.ChangeName = ChangeName;
        vm.ChangeSchool = ChangeSchool;
        vm.ChangeWorkplace = ChangeWorkplace;
        vm.ChangeAddress = ChangeAddress;
        vm.ChangeDateOfBirth = ChangeDateOfBirth;
        vm.ChangeRelationship = ChangeRelationship;
        
        vm.SubmitName = SubmitName;
        vm.SubmitSchool = SubmitSchool;
        vm.SubmitWorkplace = SubmitWorkplace;
        vm.SubmitAddress = SubmitAddress;
        vm.SubmitDateOfBirth = SubmitDateOfBirth;
        vm.SubmitRelationship = SubmitRelationship;
        
        activate();
        
        ////////////////    

        function activate() { 
            //bind dữ liệu trên firebase ở nhánh info vào biến vm.profile
            //<=> vm.profile thay đổi thì dữ liệu trên firebase cũng thay đổi
            obj.$bindTo($scope, 'data').then(function(){
                vm.profile = $scope.data;
            })
        }
        
        function Hide(index){
            vm.IsHide[index] = !vm.IsHide[index];
        }
        
        function ChangeName(){
            var firstname = $scope.firstname;
            var lastname = $scope.lastname;
            return (firstname + " " + lastname);
        }
        
        function ChangeSchool(){
            return $scope.school;
        }
        
        function ChangeWorkplace(){
            return $scope.workplace;
        }
        
        function ChangeAddress(){
            return $scope.address;
        }
        
        function ChangeDateOfBirth(){
            return $scope.dateofbirth;
        }
        
        function ChangeRelationship(){
            return $scope.relationship;
        }
        
        function SubmitName(){
            vm.profile.fullname = vm.ChangeName();
            vm.IsHide[0] = !vm.IsHide[0];
        }
        
        function SubmitSchool(){
            vm.profile.school = vm.ChangeSchool();
            vm.IsHide[1] = !vm.IsHide[1];
        }
        
        function SubmitWorkplace(){
            vm.profile.workplace = vm.ChangeWorkplace();
            vm.IsHide[2] = !vm.IsHide[2];
        }
        
        function SubmitAddress(){
            vm.profile.currentAddress = vm.ChangeAddress();
            vm.IsHide[3] = !vm.IsHide[3];
        }
        
        function SubmitDateOfBirth(){
            vm.profile.dateofbirth = vm.ChangeDateOfBirth();
            vm.IsHide[4] = !vm.IsHide[4];
        }
        
        function SubmitRelationship(){
            vm.profile.relationship = vm.ChangeRelationship();
            vm.IsHide[5] = !vm.IsHide[5];
        }
        
       /* $scope.ChangeName = function(){
            var firstname = $scope.firstname;
            var lastname = $scope.lastname;
            return (firstname + lastname);
        } */
        
        /*$scope.Submit = function(){
            vm.profile.fullname = $scope.ChangeName();
            vm.IsHide = !vm.IsHide;
        }*/
    }
})();