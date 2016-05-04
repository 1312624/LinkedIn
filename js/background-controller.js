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
        function LoadData(string){
            
            if(string === "Summary")
            {
                //Edit Summary
                var workplace = $("#current").val();
                var target = $("#target").val();
                var strong = $("#strong").val();
                var weak = $("#weak").val();
                if (workplace === '' || target === ''|| strong === ''|| weak === '') {
                    alert("Please fill all fields...!!!!!!");
                    e.preventDefault();
                } else {
                    alert("Submitted Successfully......");
                }
            
                vm.background.summary.current = workplace;
                vm.background.summary.target = target;
                vm.background.summary.strongPoint = strong;
                vm.background.summary.weakPoint = weak;
                //End Edit Summary
            }
            
            if(string === "Exp")
            {
                //Add Background - Experience
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
                //End Add Background - Exp
            }
            
            if(string === "Project")
            {
                //Add Background - Project
                var name = $("#projectname").val();
                var time = $("#time").val();
                var purpose = $("#purpose").val();
                if (name === '' || time === ''|| purpose === '') {
                    alert("Please fill all fields...!!!!!!");
                    e.preventDefault();
                } else {
                    alert("Submitted Successfully......");
                }
                
                var dataObj = {
                    name:name,
                    time:time,
                    language:purpose,
                }
            
                vm.background.project.push(dataObj);
                //End Add Background - Project
            }
            
            if(string === "Skill")
            {
                //Add Background - Project
                var name = $("#skill").val();
                var level = $("#level").val();
                if (name === '' || level === '') {
                    alert("Please fill all fields...!!!!!!");
                    e.preventDefault();
                } else {
                    alert("Submitted Successfully......");
                }
                
                var dataObj = {
                    name:name,
                    target:level,
                }
            
                vm.background.skill.push(dataObj);
                //End Add Background - Project
            }
            
        }
    }
})();