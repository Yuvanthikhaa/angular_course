(function(){
    'use strict';
    angular.module('myFirstAngularApp',[])
    .controller('MyFirstController', function($scope){
       $scope.name="max";
       $scope.sayHello=function(){return "Hello";}
    });
    
 })();