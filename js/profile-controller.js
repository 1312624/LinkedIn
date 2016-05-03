(function() {
'use strict';

    angular
        .module('app-profile')
        .controller('ProfileController',ProfileController);

    ProfileController.$inject = ['$http','$scope'];   
    function ProfileController($http,$scope) {
        window.SC = $scope;
        var vm = this;
                
        vm.profile = {};
        
        vm.IsHide = [true,true,true,true,true,true];
        vm.Hide = Hide;
        vm.ChangeName = ChangeName;
        vm.ChangeSchool = ChangeSchool;
        vm.ChangeWorkplace = ChangeWorkplace;
        
        vm.SubmitName = SubmitName;
        vm.SubmitSchool = SubmitSchool;
        vm.SubmitWorkplace = SubmitWorkplace;
        activate();
        
        ////////////////    

        function activate() {
            $http.get('data/profile.json').then(function(response){
                vm.profile = response.data.info;
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