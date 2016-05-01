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
        vm.IsHide = true;
        vm.Hide = Hide;
        activate();
        
        ////////////////    

        function activate() {
            $http.get('data/profile.json').then(function(response){
                vm.profile = response.data.info;
            })
        }
        
        function Hide(){
            vm.IsHide = !vm.IsHide;
        }
        
        $scope.ChangeName = function(){
            var firstname = $scope.firstname;
            var lastname = $scope.lastname;
            return (firstname + lastname);
        }
        
        $scope.Submit = function(){
            vm.profile.fullname = $scope.ChangeName();
            vm.IsHide = !vm.IsHide;
        }
    }
})();