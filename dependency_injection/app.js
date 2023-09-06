(function(){
    'use-strict';
    angular.module("DIApp",[]) //[] is a list of dependencies
    .controller("DIController",DIController);
    //we can also write it as .contoller("DIController",['$scope','$filter','$injector',DIController]); where the last element is the function while the remaining are the arguments of the function
    //inline array with function as last element to overcome minification
    //strings arent minified
    //This can also be done by attaching $inject property to function object
    function DIController($scope,$filter,$injector){
        $scope.name="";
        $scope.upper=function(){
            var upcase=$filter('uppercase');
            $scope.name=upcase($scope.name);
        };
        console.log($injector.annotate(DIController));
    }
    function Abc(aa,bb,cc){
        return "beautiful morning";
    }
    console.log(DIController.toString());
})();