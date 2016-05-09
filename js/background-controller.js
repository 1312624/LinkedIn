(function() {
'use strict';

    angular
        .module('app-background')
        .controller('BackgroundController', BackgroundController);

    BackgroundController.$inject = ['$firebaseObject','$firebaseArray','$scope'];
    function BackgroundController(firebaseObject,firebaseArray,$scope) {
        window.SC = $scope;
        var vm = this;
        vm.background = {};
        
        var Firebaseref = new Firebase("https://mycvlinkedin.firebaseio.com/").child("background");
        var obj = firebaseObject(Firebaseref); 
            
        vm.SkillIsHide = [true,true,true,true,true,true,true,true,true,true];
            
        vm.SubmitSkill = SubmitSkill;
        
        vm.ProjectIsHide = [true,true,true,true,true,true,true,true,true,true];
            
        vm.SubmitProject = SubmitProject;
        
        vm.SchoolIsHide = [true,true,true,true,true,true,true,true,true,true];
            
        vm.SubmitSchool = SubmitSchool;
        
        vm.ExpIsHide = [true,true,true,true,true,true,true,true,true,true];
            
        vm.SubmitExp = SubmitExp;
        
        activate();
        
        vm.LoadData = LoadData;
        ////////////////

        function activate() {    
            obj.$bindTo($scope, 'data').then(function(){
                vm.background = $scope.data;
            })
        }

        function SubmitSkill(index){
            vm.SkillIsHide[index] = !vm.SkillIsHide[index];
        }
        
        function SubmitProject(index){
            vm.ProjectIsHide[index] = !vm.ProjectIsHide[index];
        }
        
        function SubmitSchool(index){
            vm.SchoolIsHide[index] = !vm.SchoolIsHide[index];
        }
        
        function SubmitExp(index){
            vm.ExpIsHide[index] = !vm.ExpIsHide[index]
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
                if (workplace === '' && target === '' && strong === '' && weak === '') {
                    alert("Please fill at least 1 field...!!!!!!");
                    e.preventDefault();
                } else {
                    alert("Submitted Successfully......");
                }
                if(workplace != "")
                {
                    vm.background.summary.current = workplace;
                }
                
                if(target != "")
                {
                    vm.background.summary.target = target;
                }
                
                if(strong != "")
                {
                    vm.background.summary.strongPoint = strong;
                }
                
                if(weak != "")
                {
                    vm.background.summary.weakPoint = weak;
                }
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
                //Add Background - skill
                var name = $("#skill").val();
                var level = $("#level").val();
                if (name === '' || level === '') {
                    alert("Please fill all fields...!!!!!!");
                    e.preventDefault();
                } else {
                    alert("Submitted    Successfully......");
                }
                
                var dataObj = {
                    name:name,
                    target:level,
                }
            
                vm.background.skill.push(dataObj);
                
                var skills = firebaseArray(Firebaseref).child("skill");
                skills.push(dataObj);
                //End Add Background - skill
            }
            
            if(string === "School")
            {
                //Add Background - School
                var name = $("#school").val();
                var time = $("#timeschool").val();
                if (name === '' || time === ''){
                    alert("Please fill all fields...!!!!!!");
                    e.preventDefault();
                } else {
                    alert("Submitted Successfully......");
                }
                
                var dataObj = {
                    school:name,
                    Time:time,
                }
            
                vm.background.education.push(dataObj);
                //End Add Background - School
            }
        }
    }
})();