(function(){
    'use strict';
    angular.module("Exp-App",[])
    .controller("Exp-Controller",Expcontroller);
    Expcontroller.$inject=['$scope'];
    function Expcontroller($scope){
        $scope.name="dissa string";
        $scope.funco=function(){
            return "dis is funco!"
        };
        $scope.currentstate="before";
        $scope.statechanger=function(){
            $scope.currentstate="after";
        }
    }
})();