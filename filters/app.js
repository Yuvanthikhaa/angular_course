(function(){
    angular.module('FilterPractice',[])
    .controller("FilterController",FilterController)
    .filter("my",myFilter)
    .filter("another",anotherFilter);
    FilterController.$inject=['$scope','myFilter'];
    function FilterController($scope,myFilter){
        $scope.costt=.25;
    $scope.funco=function(){
        const textt="slim shady";
        const op=myFilter(textt);
        return op;  
    };    }
    function myFilter(){
        return function(input){
            input=input || "";
            input=input.replace("shady","daddy");
            return input;
        }
    }
    function anotherFilter(){
        return function(input,target,replace){
            input=input || "";
            input=input.replace(target,replace);
            return input; 
        }
    }
})();