(function() {
'use strict';

    angular
        .module('app-background')
        .controller('BackgroundController', BackgroundController);

    BackgroundController.$inject = ['$http','$scope'];
    function BackgroundController($http,$scope) {
        var vm = this;
        vm.background = {};
        
        activate();
        vm.LoadData = LoadData;
        ////////////////

        function activate() {
            $http.get('data/profile.json').then(function(response){
                vm.background = response.data.background            
            })
        }
        
        //Load data from dialog form
        function LoadData(){
            
            var pos = $("#position").val();
            var company = $("#company").val();
            var start = $("#timestart").val();
            var end = $("#timeend").val();
            var content = $("#content").val();       
            if (pos === '' || company === ''|| start === ''|| end === ''|| content === '') {
                alert("Please fill all fields...!!!!!!");
                e.preventDefault();
            } else {
                alert("Submitted Successfully......");
            }
            
            var dataObj = {
                position:pos,
                company:company,
                timestart:start,
                timeend:end,
                content:content,
            }
        
            vm.background.experience.push(dataObj);
        }
    }
})();